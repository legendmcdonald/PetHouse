import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable()
export class UserService {
    constructor(private afs: AngularFirestore) {

    }



    get(id) {
        return this.afs.collection('users').doc(id).get();
    }

    set(id, args) {
        return this.afs.collection('users').doc(id).set(args, {
            merge: true
        });
    }
}

