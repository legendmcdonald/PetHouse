import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ItemsComponent} from '../../../../../shared/components/items/items.component';
import {ActivatedRoute} from '@angular/router';
import {OrderDetailsService} from '../../../../../shared/services/orders/order-details.service';
import {OrderDetails} from '../../../../../shared/models/orders/order-details';


@Component({
    selector: 'app-admin-order-details',
    templateUrl: './order-details.component.html',
})
export class OrderDetailsComponent extends ItemsComponent<OrderDetails> implements OnInit {
    displayedColumns = ['name', 'count', 'price'];

    @Input() orderId;

    constructor(
        private activatedRoute: ActivatedRoute,
        private orderDetailsService: OrderDetailsService,
        private dialog: MatDialog,
    ) {
        super();
    }

    ngOnInit(): void {
        this.get();
    }

    // ----------------------
    get() {
        this.orderDetailsService.get(this.orderId)
            .then((data) => {
                this.set(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

