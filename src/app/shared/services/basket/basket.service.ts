import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Product} from '../../models/products/product';
import {LocalStorageService} from '../local-storage.service';


@Injectable()
export class BasketService {

    constructor(private afs: AngularFirestore,
                private localStorageService: LocalStorageService,
    ) {

    }


    get() {
        const items = this.localStorageService.getAllItems();
        return new Promise((resolve, reject) => {
            if (items === undefined || items === null) {
                reject('items is undefined');
            } else if (items.length === 0) {
                resolve([]);
            }
            const productsPromises = [];
          // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < items.length; ++i) {
                productsPromises.push(this.afs.collection<Product>('products').doc(items[i].key).get()
                    .toPromise());
            }
            Promise.all(productsPromises)
                .then((values) => {
                    const products = [];
                  // tslint:disable-next-line:prefer-for-of
                    for (let i = 0; i < values.length; ++i) {
                        const result = items.find((a) => a.key === values[i].id);
                        if (result === undefined) {
                            continue;
                        }

                        products.push({
                            id: values[i].id,
                            name: values[i].data().name,
                            artist: values[i].data().artist,
                            price: values[i].data().price,
                            count: result.value,
                            discount: 0,
                        });
                    }
                    resolve(products);
                })
                .catch((error) => {
                    reject(error);
                })
            ;
        });
    }


    add(id) {
        this.localStorageService.add(id, 1);
    }

    update(id, count) {
        this.localStorageService.set(id, count);
    }

    delete(id) {
        this.localStorageService.remove(id);
    }

    getCount(): number {
        return this.localStorageService.getTotal();
    }

    clear() {
        this.localStorageService.clear();
    }
}
