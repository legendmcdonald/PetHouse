import {NgModule} from '@angular/core';


import {AdminOrdersRoutingModule} from './admin-orders.routing.module';
import {AdminOrdersComponent} from './admin-orders.component';
import {MaterialModule} from "../../../material.module";
import {ComponentsModule} from "../../../components.module";
import {CommonModule} from "@angular/common";
import {OrdersService} from "../../../shared/services/orders/orders.service";


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ComponentsModule,
        AdminOrdersRoutingModule,
    ],
    declarations: [
        AdminOrdersComponent,

    ],
    providers: [
        OrdersService,
    ],
    entryComponents: []
})
export class AdminOrdersModule {
}


