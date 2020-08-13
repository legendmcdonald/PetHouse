import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Order} from '../../models/orders/order';

@Injectable()
export class OrderService {

    constructor(private afs: AngularFirestore) {

    }

    get(id) {
        return this.afs.collection<Order>('orders').doc(id).get()
            .pipe(map(
                actions => {
                    return new Order(actions);
                }));
    }

    set(id, args = null) {
        return this.afs.collection('orders').doc(id).set(args, {
            merge: true
        });
    }

}
