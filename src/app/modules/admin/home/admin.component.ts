import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../shared/services/authentication.service';


interface Tile {
    text: string;
    url: string;
    icon: string;
    cols: number;
    rows: number;
    color: string;
}

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
    breadcrumbs = [{label: '', params: '', url: '/admin', home: true}
    ];

    tools: Tile[] = [
        {
            text: 'Albums',
            url: '/admin/products',
            cols: 1,
            rows: 1,
            icon: 'library_music',
            color: '#6a1b9a',
        },
        {
            text: 'Categories',
            url: '/admin/categories',
            cols: 1,
            rows: 1,
            icon: 'category',
            color: '#00796b',
        }, {
            text: 'Orders',
            url: '/admin/orders',
            cols: 1,
            rows: 1,
            icon: 'shop',
            color: '#bf360c',
        },
    ];

    constructor(
        private dialog: MatDialog,
        private router: Router,
        private authenticationService: AuthenticationService,
    ) {

    }

    ngOnInit(): void {

    }

    getCounts() {

    }

}
