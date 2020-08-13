import {inject, TestBed} from '@angular/core/testing';
import {AdminProductsComponent} from './admin-products.component';


describe('AdminProductCreated', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AdminProductsComponent]
        });
    });

    it('should be created', inject([AdminProductsComponent], (service: AdminProductsComponent) => {
        expect(service).toBeTruthy();
    }));
});
