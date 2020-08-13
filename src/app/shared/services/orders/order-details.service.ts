import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {OrderDetails} from '../../models/orders/order-details';
import {Product} from '../../models/products/product';

@Injectable()
export class OrderDetailsService {

    constructor(private afs: AngularFirestore) {

    }

    get(orderId, args = null) {
        return new Promise((resolve, reject) => {
            const subscription = this.afs.collection<OrderDetails>('order_details',
                ref => ref.where('orderId', '==', orderId)
            ).snapshotChanges()
                .pipe(map(
                    actions => {
                        return actions.map(item => {
                            return new OrderDetails(item.payload.doc);
                        });
                    }))
                .subscribe(
                    ((items) => {
                        subscription.unsubscribe();

                        const promises = [];
                        items.forEach((item) => {
                            promises.push(this.afs.collection('products').doc(item.productId)
                                .get()
                                .pipe(map(
                                    actions => {
                                        return new Product(actions);
                                    }))
                                .toPromise()
                            )
                            ;

                        });

                        Promise.all(promises)
                            .then((next) => {
                                next.forEach((item) => {
                                   items.forEach((orderDetail) => {
                                       if (orderDetail.productId === item.id) {
                                           orderDetail.productName = item.name;
                                       }
                                   });
                                });
                                resolve(items);
                            })
                            .catch((error) => {
                                reject(error);
                            });

                    }),
                    ((error) => {
                        subscription.unsubscribe();
                        reject(error);
                    })
                );
        });
    }
}
