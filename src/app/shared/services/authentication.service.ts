import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Account} from '../models/account';
import {UserService} from './user/user.service';


@Injectable()
export class AuthenticationService {
    account: Account = null;


    constructor(private firebaseAuth: AngularFireAuth,
                private afs: AngularFirestore,
                private userService: UserService,
    ) {
        this.checkIfLoggedIn();
    }

    register(name, email: string, password: string) {
        return new Promise((resolve, reject) => {
            this.firebaseAuth
                .auth
                .createUserWithEmailAndPassword(email, password)
                .then(value => {
                    this.account = new Account(value.user.uid, value.user.email);
                    this.userService.set(this.account.id, {
                        admin: false,
                        name,
                    }).then(() => {
                        this.account.name = name;
                        resolve(this.account);
                    }).catch((error) => {
                        reject(error.message);
                    });
                })
                .catch(err => {
                    reject(err.message);
                });
        });
    }

    login(email: string, password: string) {
        return new Promise((resolve, reject) => {
            this.firebaseAuth
                .auth
                .signInWithEmailAndPassword(email, password)
                .then(value => {
                    this.account = new Account(value.user.uid, value.user.email);
                    this.getAccountInfo()
                        .then(() => {
                            resolve(this.account);
                        })
                        .catch((error) => {
                            reject(error);
                        })
                    ;
                })
                .catch(err => {
                    reject(err.message);
                });
        });
    }

    logout() {
        this.firebaseAuth.auth.signOut()
            .then((next) => {

            })
            .catch(err => {

            });
        this.account = null;
    }

    isAuthenticated() {
        return this.account != null;
    }

    isUser() {
        return this.account != null && this.account.admin === false;

    }

    isAdmin() {
        return this.account != null && this.account.admin === true;
    }

    getAccount() {
        return this.account;
    }

    getAccountId() {
        if (this.account === null) {
            return '';
        }
        return this.account.id;
    }

    getName() {
        return this.account ? this.account.name : '';
    }

    //
    // -----------------------
    private checkIfLoggedIn() {
        this.firebaseAuth.authState
            .subscribe((next) => {
                    if (next && next.uid) {
                        this.account = new Account(next.uid, next.email);
                        this.getAccountInfo().then();
                    } else {
                        this.account = null;
                    }
                }
            );
    }

    private getAccountInfo() {
        return new Promise((resolve, reject) => {
            this.userService.get(this.account.id)
                .subscribe((result) => {
                        this.account.name = result.data().name;
                        this.account.admin = result.data().admin;
                        resolve();
                    }, (error) => {
                        reject(error);
                    }
                );
        });

    }
}
