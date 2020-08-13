import { TestBed, inject } from '@angular/core/testing';
import {AdminCategoriesComponent} from './admin-categories.component';

describe('AdminCategoriesCreated', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AdminCategoriesComponent]
        });
    });

    it('should be created', inject([AdminCategoriesComponent], (service: AdminCategoriesComponent) => {
        expect(service).toBeTruthy();
    }));
});
