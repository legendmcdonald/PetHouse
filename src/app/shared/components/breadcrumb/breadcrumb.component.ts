import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {

    _breadcrumbs: [];

    @Input()
    set breadcrumbs(value) {
        this._breadcrumbs = value;
    }


    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
    ) {

    }


    ngOnInit(): void {

    }

    navigate(element) {
        if (element === undefined) {
            return;
        }
        this.router.navigate([element.url]);
    }

}


