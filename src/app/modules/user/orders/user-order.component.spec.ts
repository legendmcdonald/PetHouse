import { TestBed, inject } from '@angular/core/testing';
import {UserOrdersComponent} from "./user-orders.component";
import {OrdersService} from "../../../shared/services/orders/orders.service";

describe('OrderIsShown', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserOrdersComponent]
        });
    });

    it('Order be Shown', inject([UserOrdersComponent], (service: OrdersService) => {
        expect(service).toBeTruthy();
    }));
});
