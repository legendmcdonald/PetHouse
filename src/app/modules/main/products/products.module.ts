import {NgModule} from '@angular/core';
import {MaterialModule} from '../../../material.module';

import {ProductsRoutingModule} from './products.routing.module';
import {ComponentsModule} from '../../../components.module';
import {ProductsService} from '../../../shared/services/products/products.service';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared.module';
import {AdminProductsModule} from '../../admin/products/admin-products.module';
import {CategoriesComponent} from './components/categories/categories.component';
import {CategoriesService} from '../../../shared/services/categoreis/categories.service';
import {ProductModule} from '../product/product.module';
import {WindowRef} from '../../../shared/directives/WindowRef';
import {FilterComponent} from './components/filter/filter.component';
import {ProductsComponent} from './products.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';


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
        ToolbarComponent,
        CategoriesComponent,
        FilterComponent,
    ],
    providers: [
        ProductsService,
        CategoriesService,
        WindowRef,
    ],
    entryComponents: [
        FilterComponent,

    ]
})
export class ProductsModule {
}
