import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Track} from '../models/tracks/track';
import {Product} from '../models/products/product';


@Injectable()
export class MaintenanceService {
    constructor(private afs: AngularFirestore) {

    }

    fixProductsDurationAndTracks() {
        this.afs.collection<Product>('products').snapshotChanges()
            .pipe(map(actions => {
                    return actions.map(item => {
                        return new Product(item.payload.doc);
                    });
                }
            ))
            .subscribe((next) => {
                next.forEach((product) => {

                    this.afs.collection<Track>('product_tracks',
                        ref => ref.where('productId', '==', product.id)).snapshotChanges()
                        .pipe(map(
                            actions => {
                                return actions.map(item => {
                                    return new Track(item.payload.doc);
                                });
                            }))
                        .subscribe(
                            (tracks) => {

                                let duration = 0;
                                tracks.forEach((track) => {
                                   duration +=  track.duration;
                                });
                                console.log(tracks);
                                console.log(duration);


                                this.afs.collection('products').doc(product.id).set(
                                    {
                                        duration,
                                        tracks: tracks.length,
                                    }, {
                                        merge: true
                                    })
                                    .then((next) => {

                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });



                            },
                            (error) => {
                                console.log(error);
                            }
                        );


                });


            }, (error) => {
                console.log(error);
            });
    }

}
