import {Model} from '../model';

export class Track extends Model {
    name: string;
    description: string;
    productId: string;
    duration: number;
    createdAt: string;
    sample: string;

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
        this.sample = document.data().sample;
        this.duration = document.data().duration;
        this.description = document.data().description;
        this.createdAt = document.data().createdAt != null ? document.data().createdAt.toDate().toLocaleString() : '';
    }
}
