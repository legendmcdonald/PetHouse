import {inject, TestBed} from '@angular/core/testing';
import {AdminProductComponent} from './admin-product.component';


describe('ProductInfoIsShown', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AdminProductComponent]
        });
    });

    it('should be created', inject([AdminProductComponent], (service: AdminProductComponent) => {
        expect(service).toBeTruthy();
    }));
});

