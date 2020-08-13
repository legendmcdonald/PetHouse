import {Component, Input, OnInit} from '@angular/core';


@Component({
    selector: 'app-main-product-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})

export class InfoComponent implements OnInit {

    @Input() product;

    constructor() {

    }

    ngOnInit(): void {

    }

}



