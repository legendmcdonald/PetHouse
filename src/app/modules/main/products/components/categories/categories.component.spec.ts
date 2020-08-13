import { TestBed, inject } from '@angular/core/testing';
import {CategoriesComponent} from './categories.component';
import {CategoriesService} from '../../../../../shared/services/categoreis/categories.service';

describe('CategoriesIsShown', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CategoriesComponent]
        });
    });

    it('Categories be Shown', inject([CategoriesComponent], (service: CategoriesService) => {
        expect(service).toBeTruthy();
    }));
});
