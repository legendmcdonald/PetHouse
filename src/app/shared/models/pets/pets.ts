import {Model} from '../model';

export class Pets extends Model {
    name: string;
    description: string;
    productId: string;
    createdAt: string;


    constructor(document = null) {
        super();
        if (document != null) {
            this.fromDocument(document);
        }
    }

    fromDocument(document) {
        this.id = document.id;
        this.name = document.data().name;
        this.productId = document.data().productId;
        this.description = document.data().description;
        this.createdAt = document.data().createdAt != null ? document.data().createdAt.toDate().toLocaleString() : '';
    }
}
