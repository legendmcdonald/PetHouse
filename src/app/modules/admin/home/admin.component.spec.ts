import { TestBed, inject } from '@angular/core/testing';
import {AdminComponent} from "./admin.component";


describe('AdminComponentCreated', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AdminComponent]
        });
    });

    it('should be created', inject([AdminComponent], (service: AdminComponent) => {
        expect(service).toBeTruthy();
    }));
});
