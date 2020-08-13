import { TestBed, inject } from '@angular/core/testing';
import {RatingComponent} from "./rating.component";
import {Component} from "@angular/core/src/metadata/directives";


describe('RatingISCreated', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RatingComponent]
        });
    });

    it('should be created', inject([RatingComponent], (service: RatingComponent) => {
        expect(service).toBeTruthy();
    }));
});
