import {inject, TestBed} from '@angular/core/testing';
import {AdminOrderComponent} from './admin-order.component';


describe('ProductInfoIsShown', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AdminOrderComponent]
        });
    });

    it('should be created', inject([AdminOrderComponent], (service: AdminOrderComponent) => {
        expect(service).toBeTruthy();
    }));
});

