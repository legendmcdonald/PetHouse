import {inject, TestBed} from '@angular/core/testing';
import {AdminOrdersComponent} from './admin-orders.component';


describe('AdminProductCreated', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AdminOrdersComponent]
        });
    });

    it('should be created', inject([AdminOrdersComponent], (service: AdminOrdersComponent) => {
        expect(service).toBeTruthy();
    }));
});
