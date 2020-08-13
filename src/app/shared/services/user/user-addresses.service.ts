import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable()
export class UserAddressesService {
    constructor(private afs: AngularFirestore) {

    }

    get(uid) {
        return this.afs.collection('addresses').doc(uid).get();
    }

    set(uid, arg) {
        return this.afs.collection('addresses').doc(uid).set(arg);
    }


    delete(args) {

    }

}
