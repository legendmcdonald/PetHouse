import {Injectable} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';


@Injectable()
export class UploadService {
    constructor(private afs: AngularFireStorage) {


    }

    upload(path, name, file) {
        return new Promise((resolve, reject) => {
            this.afs.upload(path + name, file)
                .then((next) => {
                        next.ref.getDownloadURL()
                            .then((data) => {
                                    resolve(data);
                                }
                            )
                            .catch((error) => {
                                reject(error);
                            });
                    }
                )
                .catch((error) => {
                    reject(error);
                });
        });

    }

}
