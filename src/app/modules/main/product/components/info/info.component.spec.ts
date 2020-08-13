import { TestBed, inject } from '@angular/core/testing';
import {InfoComponent} from "./info.component";

describe('InfoISShown', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [InfoComponent]
        });
    });

    it('Info be Shown', inject([InfoComponent], (service: InfoComponent) => {
        expect(service).toBeTruthy();
    }));
});
