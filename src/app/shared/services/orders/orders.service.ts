import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {firestore} from 'firebase/app';
import {Order} from '../../models/orders/order';

@Injectable()
export class OrdersService {

    constructor(private afs: AngularFirestore) {

    }

    get(userId = '') {
        if (userId === '') {
            return this.afs.collection<Order>('orders').snapshotChanges()
                .pipe(map(
                    actions => {
                        return actions.map(item => {
                            return new Order(item.payload.doc);
                        });
                    }));
        } else {
            return this.afs.collection<Order>('orders',
                ref => ref.where('userId', '==', userId)
            ).snapshotChanges()
                .pipe(map(
                    actions => {
                        return actions.map(item => {
                            return new Order(item.payload.doc);
                        });
                    }));
        }
    }

    add(order, details) {
        return new Promise((resolve, reject) => {
            order.createdAt = firestore.FieldValue.serverTimestamp();
            this.afs.collection('orders').add(order)
                .then((next) => {
                    const detailsPromises = [];

                    details.forEach((item) => {
                        item.orderId = next.id;
                        detailsPromises.push(this.afs.collection('order_details').add(item));
                    });
                    Promise.all(detailsPromises)
                        .then((data) => {
                            {
                                resolve(next.id);

                            }
                        })
                        .catch((error) => {
                            reject(error);
                        });
                })
                .catch((error) => {
                    reject(error);
                });
        });

    }
}
