import { TestBed, inject } from '@angular/core/testing';
import {BasketComponent} from "./basket.component";
import {BasketService} from "../../../shared/services/basket/basket.service";

describe('BasketIsShown', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BasketComponent]
        });
    });

    it('Basket be Shown', inject([BasketComponent], (service: BasketService) => {
        expect(service).toBeTruthy();
    }));
});
