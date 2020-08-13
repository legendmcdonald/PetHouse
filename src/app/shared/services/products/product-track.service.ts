import {Injectable} from '@angular/core';
import {Product} from '../../models/products/product';
import {AngularFirestore} from '@angular/fire/firestore';
import {firestore} from 'firebase/app';


@Injectable()
export class ProductTrackService {
    constructor(private afs: AngularFirestore) {

    }

    get(id) {
        return this.afs.collection<Product>('product_tracks').doc(id).get();
    }

    set(id, args = null) {
        return this.afs.collection('product_tracks').doc(id).set(args, {
            merge: true
        });
    }

    delete(productId, id, duration) {
        return new Promise((resolve, reject) => {
            this.afs.collection('product_tracks').doc(id).delete()
                .then(() => {
                    this.afs.collection('products').doc(productId).update(
                        {
                            duration: firestore.FieldValue.increment(-1 * duration),
                            tracks: firestore.FieldValue.increment(-1 ),
                        })
                        .then(() => {
                            resolve();
                        })
                        .catch((error) => {
                            reject(error);
                        });
                })
                .catch((error) => {
                    console.log(error);
                    reject(error);
                });
        });
    }
}
