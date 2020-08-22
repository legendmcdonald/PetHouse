import {NgModule} from '@angular/core';
import {MaterialModule} from '../../../material.module';

import {ProductsRoutingModule} from './products.routing.module';
import {ComponentsModule} from '../../../components.module';
import {ProductsService} from '../../../shared/services/products/products.service';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared.module';
import {AdminProductsModule} from '../../admin/products/admin-products.module';
import {ProductModule} from '../product/product.module';
import {WindowRef} from '../../../shared/directives/WindowRef';
import {ProductsComponent} from './products.component';


@NgModule({
    imports: [
        MaterialModule,
        ComponentsModule,
        ProductsRoutingModule,
        CommonModule,
        SharedModule,
        AdminProductsModule,
        ProductModule,
    ],
    declarations: [
        ProductsComponent,
        ProductsComponent,
    ],
    providers: [
        ProductsService,
        WindowRef,
    ],
    entryComponents: [
    ]
})
export class ProductsModule {
}
