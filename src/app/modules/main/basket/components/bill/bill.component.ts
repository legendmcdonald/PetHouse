import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-main-basket-bill',
    templateUrl: './bill.component.html',
    styleUrls: ['./bill.component.scss'],
})
export class BillComponent implements OnInit {
    _total = 0;
    _count = 0;

    @Input()
    set total(value) {
        this._total = value;
    }

    @Input()
    set count(value) {
        this._count = value;
    }

    constructor() {


    }

    ngOnInit(): void {

    }


}


