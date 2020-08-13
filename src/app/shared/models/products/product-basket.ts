import {Model} from '../model';

export class ProductBasket extends Model {
    name: string;
    price: number;
    count: number;
    discount = 0;

    constructor() {
        super();

    }
}
