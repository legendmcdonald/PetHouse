import {Component, OnInit} from '@angular/core';
import {ItemsComponent} from '../../../shared/components/items/items.component';
import {Order} from '../../../shared/models/orders/order';
import {OrdersService} from '../../../shared/services/orders/orders.service';
import {AuthenticationService} from '../../../shared/services/authentication.service';


@Component({
    selector: 'app-admin-orders',
    templateUrl: './admin-orders.component.html',
    styleUrls: ['./admin-orders.component.scss'],
})
export class AdminOrdersComponent extends ItemsComponent<Order> implements OnInit {
    breadcrumbs = [{label: '', params: '', url: '/admin', home: true},
        {label: 'Orders', params: '', url: '/admin/orders', home: false}
    ];

    displayedColumns = ['created_at', 'pets', 'price', 'status'];

    constructor(
        private authenticationService: AuthenticationService,
        private ordersService: OrdersService,
    ) {
        super();
    }

    ngOnInit(): void {
        this.get();
    }


    // ----------------------
    get() {
        const subscription = this.ordersService.get()
            .subscribe(
                (data) => {
                    this.set(data);
                    subscription.unsubscribe();
                },
                () => {
                    subscription.unsubscribe();
                }
            )
        ;
    }
}

