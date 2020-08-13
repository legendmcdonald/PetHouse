import {Component, OnInit} from '@angular/core';
import {ItemsComponent} from '../../../shared/components/items/items.component';
import {Order} from '../../../shared/models/orders/order';
import {OrdersService} from '../../../shared/services/orders/orders.service';
import {AuthenticationService} from '../../../shared/services/authentication.service';


@Component({
    selector: 'app-user-orders',
    templateUrl: './user-orders.component.html',
    styleUrls: ['./user-orders.component.scss'],
})
export class UserOrdersComponent extends ItemsComponent<Order> implements OnInit {
    breadcrumbs = [{label: '', params: '', url: '/user', home: true},
        {label: 'Orders', params: '', url: '/user/orders', home: false}
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
        if (!this.authenticationService.isAuthenticated()) {
            setTimeout(() => {
                this.get();
            }, 1000);
            return;
        }
        const subscription = this.ordersService.get(this.authenticationService.getAccountId())
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

