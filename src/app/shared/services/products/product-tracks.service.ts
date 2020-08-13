import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Track} from '../../models/tracks/track';
import {map} from 'rxjs/operators';
import {firestore} from 'firebase/app';


@Injectable()
export class ProductTracksService {


    constructor(private afs: AngularFirestore) {

    }

    get(id, args = null) {
        return this.afs.collection<Track>('product_tracks',
            ref => ref.where('productId', '==', id)).snapshotChanges()
            .pipe(map(
                actions => {
                    return actions.map(item => {
                        return new Track(item.payload.doc);
                    });
                }));
    }

    add(args) {
        args.createdAt = firestore.FieldValue.serverTimestamp();
        return new Promise((resolve, reject) => {
            this.afs.collection('product_tracks').add(args)
                .then((data) => {
                    this.afs.collection('products').doc(args.productId).update(
                        {
                            duration: firestore.FieldValue.increment(args.duration),
                            tracks: firestore.FieldValue.increment(1)
                        })
                        .then((next) => {
                            args.id = data.id;
                            args.createdAt = (new Date()).toLocaleString();
                            resolve(args);
                        })
                        .catch((error) => {
                            console.log(error);
                            reject(error);
                        });
                })
                .catch((error) => {
                    console.log(error);
                    reject(error);
                })
            ;
        });
    }

}
