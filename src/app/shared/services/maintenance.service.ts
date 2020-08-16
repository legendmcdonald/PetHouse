import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable()
export class MaintenanceService {
    constructor(private afs: AngularFirestore) {

    }
}
