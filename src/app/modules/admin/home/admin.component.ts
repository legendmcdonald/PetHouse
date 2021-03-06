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
            text: 'Pets',
            url: '/admin/products',
            cols: 1,
            rows: 1,
            icon: 'pets',
            color: '#ecb52a',
        },
         {
            text: 'Orders',
            url: '/admin/orders',
            cols: 1,
            rows: 1,
            icon: 'local_mall',
            color: '#bf360c',
        },
    ];
     name: string;

    constructor(
        private dialog: MatDialog,
        private router: Router,
        private authenticationService: AuthenticationService,
    ) {

    }

    ngOnInit(): void {
      this.name = this.authenticationService.getName();
    }
}
