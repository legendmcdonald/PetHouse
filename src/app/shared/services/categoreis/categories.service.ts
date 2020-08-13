import {Injectable} from '@angular/core';
import {Category} from "../../models/categories/category";
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from "rxjs/operators";
import {firestore} from 'firebase/app';

@Injectable()
export class CategoriesService {

    constructor(private afs: AngularFirestore) {

    }

    get(args = null) {
        return this.afs.collection<Category>('categories').snapshotChanges()
            .pipe(map(
                actions => {
                    return actions.map(item => ({
                        id: item.payload.doc.id,
                        name: item.payload.doc.data().name,
                        description: item.payload.doc.data().description,
                        count: item.payload.doc.data().count,
                    }))
                }));
    }

    add(args) {
        args.created_at = firestore.FieldValue.serverTimestamp();
        return this.afs.collection('categories').add(args);
    }
}
