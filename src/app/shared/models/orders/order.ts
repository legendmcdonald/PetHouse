import {Model} from '../model';

export class Order extends Model {
    userId: string;
    createdAt: string;
    price: number;
    pets: number;
    status: number;


    constructor(document = null) {
        super();
        if (document != null) {
            this.fromDocument(document);
        }
    }

    fromDocument(document) {
        this.id = document.id;
        this.userId = document.data().userId;
        this.price = document.data().price;
        this.pets = document.data().pets;
        this.status = document.data().status;
        this.createdAt = document.data().createdAt != null ? document.data().createdAt.toDate().toLocaleString() : '';
    }

    statusToString() {
        switch (this.status) {
            case 0:
                return 'Ordered';
            case 1:
                return 'Processing';
            case 2:
                return 'Shipping';
            case 3:
                return 'Sent';
        }
    }
}
