import {inject, TestBed} from '@angular/core/testing';
import {UserOrdersComponent} from './user-orders.component';


describe('AdminProductCreated', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserOrdersComponent]
        });
    });

    it('should be created', inject([UserOrdersComponent], (service: UserOrdersComponent) => {
        expect(service).toBeTruthy();
    }));
});
