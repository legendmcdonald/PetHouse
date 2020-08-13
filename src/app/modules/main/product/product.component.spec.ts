import {inject, TestBed} from '@angular/core/testing';
import {ProductComponent} from './product.component';


describe('ProductInfoIsShown', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProductComponent]
        });
    });

    it('should be created', inject([ProductComponent], (service: ProductComponent) => {
        expect(service).toBeTruthy();
    }));
});

