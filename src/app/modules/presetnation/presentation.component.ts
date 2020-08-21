import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './presentation.component.html',
    styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {
    categoryId = '';
    categoryName = 'All';

    constructor() {

    }

    ngOnInit(): void {
    }

    categoryChanged(element) {
        this.categoryId = element.id;
        this.categoryName = element.name;
    }
}


