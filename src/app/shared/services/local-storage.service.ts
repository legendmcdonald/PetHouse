import {Injectable} from '@angular/core';
import {StorageItem} from '../models/storage-item';


@Injectable()
export class LocalStorageService {
    localStorageSupported: boolean;

    constructor() {
      // tslint:disable-next-line:triple-equals
        this.localStorageSupported = typeof window.localStorage != 'undefined' && window.localStorage != null;
    }


    // add value to storage
    add(key: string, item) {
        if (this.localStorageSupported) {
            let total = localStorage.getItem('product:' + key);
            if (total == null) {
                total = '1';
            } else {
                total = String(parseInt(total, 10) + 1);
            }

            localStorage.setItem('product:' + key, total);
        }
    }

    set(key: string, item) {
        if (this.localStorageSupported) {
            localStorage.setItem('product:' + key, item);
        }
    }

    getTotal(): number {
        if (this.localStorageSupported) {
            let total = 0;
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (!key.startsWith('product:')) {
                    continue;
                }
                const value = localStorage.getItem(key);
                total += parseInt(value, 10);
            }
            return total;
        } else {
            return 0;
        }
    }


    // get all values from storage (all items)
    getAllItems(): Array<StorageItem> {
        const list = new Array<StorageItem>();

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (!key.startsWith('product:')) {
                continue;
            }
            const value = localStorage.getItem(key);
            list.push(new StorageItem(key.substring(8), value));
        }

        return list;
    }

    // get only all values from localStorage
    getAllValues(): Array<any> {
        const list = new Array<any>();

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (!key.startsWith('product:')) {
                continue;
            }
            const value = localStorage.getItem(key);
            list.push(value);
        }

        return list;
    }

    // get one item by key from storage
    get(key: string) {
        if (this.localStorageSupported) {
            return localStorage.getItem('product:' + key);
        } else {
            return null;
        }
    }

    // remove value from storage
    remove(key: string) {
        if (this.localStorageSupported) {
            localStorage.removeItem('product:' + key);
        }
    }

    // clear storage (remove all items from it)
    clear() {
        if (this.localStorageSupported) {
            for (let i = localStorage.length - 1; i >= 0 ; i--) {
                const key = localStorage.key(i);
                if (!key.startsWith('product:')) {
                    continue;
                }
                localStorage.removeItem(key);
            }

        }
    }
}
