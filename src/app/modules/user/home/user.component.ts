import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../shared/services/authentication.service";


interface Tile {
    text: string;
    url: string;
    icon: string;
    cols: number;
    rows: number;
    color: string;
}

@Component({
    selector: 'app-user-home',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    breadcrumbs = [{label: '', params: '', url: '/user', home: true}
    ];

    items: Tile[] = [
        {
            text: 'Address',
            url: '/user/address',
            cols: 1,
            rows: 1,
            icon: 'local_post_office',
            color: '#6a1b9a',
        },
        {
            text: 'Orders',
            url: '/user/orders',
            cols: 1,
            rows: 1,
            icon: 'shopping_basket',
            color: '#00796b',
        }
    ];

    constructor(
        private authenticationService: AuthenticationService,
    ) {

    }

    ngOnInit(): void {

    }

    // ----------------------
    get() {

    }
}

