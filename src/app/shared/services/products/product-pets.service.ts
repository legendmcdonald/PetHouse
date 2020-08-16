import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Pets} from '../../models/pets/pets';
import {map} from 'rxjs/operators';


@Injectable()
export class ProductPetsService {


    constructor(private afs: AngularFirestore) {

    }

    get(id, args = null) {
        return this.afs.collection<Pets>('product_pets',
            ref => ref.where('productId', '==', id)).snapshotChanges()
            .pipe(map(
                actions => {
                    return actions.map(item => {
                        return new Pets(item.payload.doc);
                    });
                }));
    }

}
