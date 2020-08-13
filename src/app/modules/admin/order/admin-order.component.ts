import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material';
import {StatusComponent} from './components/status/status.component';
import {Order} from '../../../shared/models/orders/order';
import {OrderService} from '../../../shared/services/orders/order.service';


@Component({
    selector: 'app-admin-product',
    templateUrl: './admin-order.component.html',
    styleUrls: ['./admin-order.component.scss']
})

export class AdminOrderComponent implements OnInit {
    breadcrumbs = [{label: '', params: '', url: '/admin', home: true},
        {label: 'Orders', params: '', url: '/admin/orders', home: false},
    ];
    order: Order = new Order();

    constructor(
        private orderService: OrderService,
        private activatedRoute: ActivatedRoute,
        private dialog: MatDialog,
    ) {

    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.order.id = params.id;
            this.load();
        });
    }

    openStatusComponent() {
        const ref = this.dialog.open(StatusComponent, {autoFocus: true, minWidth: 400, data: this.order});
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.order.status = result.status;
            }
        });
    }

    // -----------------------
    load() {
        const subscription = this.orderService.get(this.order.id).subscribe(
            (next) => {
                this.order = next;
                this.breadcrumbs.push({label: next.id, params: '', url: '/admin/orders/' + next.id, home: false});
                subscription.unsubscribe();

            },
            () => {
                subscription.unsubscribe();
            }
        );
    }
}



