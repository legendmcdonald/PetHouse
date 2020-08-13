import {Injectable} from '@angular/core';
import {Wampy} from 'wampy';

@Injectable()
export class SessionService {
    socket = null;
    connectedListeners = [];
    closedListeners = [];
    errorListeners = [];


    constructor() {
        this.socket = new Wampy({
            realm: 'pethouse',
            reconnectInterval: 5000,
            maxRetries: 99999,
            autoReconnect: true
        });


        this.socket.options({
            onConnect: () => {
                this.onConnect();
            },
            onClose: () => {
                this.onClose();
            },
            onError: (err) => {
                this.onError(err);
            },
            onReconnect: () => {
                this.onReconnect();
            },
        });

    }

    private onConnect() {
        this.connectedListeners.forEach((element) => {
            element();
        });
    }

    private onReconnect() {

    }

    private onClose() {

    }

    private onError(err) {

    }

    connect(address) {
        this.socket.connect(address);
    }

    close() {
        this.socket.disconnect();
    }

    addConnectedListener(cb) {
        this.connectedListeners.push(cb);
    }


    addClosedListener(cb) {
        this.closedListeners.push(cb);
    }


    //
    // ------------------
    // PubSub
    // ---------------------
    publish(topic, payload = null) {
        this.socket.publish(topic, payload);
    }

    subscribe(topic, callback) {
        this.socket.subscribe(topic, {
            // onSuccess: function () { console.log('subscribed to ' + topic); },
            onError: function (err, details) {
                console.log('failed to subscribe to ' + topic + ', ' + err);
            },
            onEvent: function (result) {
                if (callback === undefined) {
                    return;
                }
                callback(result.argsList, result.argsDict);
            }
        });
    }

    unsubscribe(topic) {
        this.socket.unsubscribe(topic);
    }

    // RPC
    // ---------------------
    register(name, callback) {
        this.socket.register(name, {
            rpc: function (data) {
                if (callback === undefined) {
                    return;
                }
                callback(data);
            },
            onSuccess: function (data) {
                // console.log('RPC successfully registered');
            },
            onError: function (err) {
                console.log('failed to register rpc', err.error);
            }
        });
    }

    call(name, payload, resultCallback, errorCallback = null) {
        this.socket.call(name, payload, {
            onSuccess: function (result) {
                if (resultCallback !== undefined) {
                    resultCallback(result);
                }
            },
            onError: function (err) {
                if (errorCallback !== undefined) {
                    errorCallback(err);
                }
            }
        });
    }
}
