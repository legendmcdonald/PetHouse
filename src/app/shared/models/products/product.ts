import {Model} from '../model';

export class Product extends Model {
    name: string;
    type: string;
    cover: string;
    price: number;
    description: string;
    createdAt: string;
    rowSpan: number;
    columnSpan: number;
    year: number;
    constructor(document = null) {
        super();
        if (document != null) {
            this.fromDocument(document);
        }
    }

    fromDocument(document) {
        this.id = document.id;
        this.name = document.data().name;
        this.type = document.data().type;
        this.price = parseInt(document.data().price, 10);
        this.cover = document.data().cover;
        this.description = document.data().description;
        this.createdAt = document.data().createdAt != null ? document.data().createdAt.toDate().toLocaleString() : '';
        this.year = document.data().year;
        this.columnSpan = document.data().columnSpan === undefined ? 1 : document.data().columnSpan;
        this.rowSpan = document.data().rowSpan === undefined ? 1 : document.data().rowSpan;
    }
}
