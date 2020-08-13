import {Model} from '../model';

export class OrderDetails extends Model {
    orderId: string;
    productId: string;
    productName: string;
    count: number;
    price: number;

    constructor(document = null) {
        super();
        if (document != null) {
            this.fromDocument(document);
        }
    }

    fromDocument(document) {
        this.id = document.id;
        this.orderId = document.data().orderId;
        this.productId = document.data().productId;
        this.count = document.data().count;
        this.price = document.data().price;
    }
}
