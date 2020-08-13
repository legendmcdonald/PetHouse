import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Product} from '../../models/products/product';


@Injectable()
export class UsersService {
    constructor(private afs: AngularFirestore) {

    }

    get() {
        return this.afs.collection<Product>('users').snapshotChanges();
    }
}

