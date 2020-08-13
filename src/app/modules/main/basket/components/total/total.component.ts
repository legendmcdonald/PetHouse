import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-main-basket-total',
    templateUrl: './total.component.html',
    styleUrls: ['./total.component.scss'],
})
export class TotalComponent implements OnInit {
    _total = 0;

    @Input()
    set total(value) {
        this._total = value;
    }

    constructor() {

    }

    ngOnInit(): void {

    }


}


