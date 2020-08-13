import {NgModule} from '@angular/core';


import {UserOrdersRoutingModule} from './user-orders.routing.module';
import {UserOrdersComponent} from './user-orders.component';
import {MaterialModule} from "../../../material.module";
import {ComponentsModule} from "../../../components.module";
import {CommonModule} from "@angular/common";
import {OrdersService} from "../../../shared/services/orders/orders.service";


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ComponentsModule,
        UserOrdersRoutingModule,
    ],
    declarations: [
        UserOrdersComponent,

    ],
    providers: [
        OrdersService,
    ],
    entryComponents: []
})
export class UserOrdersModule {
}

