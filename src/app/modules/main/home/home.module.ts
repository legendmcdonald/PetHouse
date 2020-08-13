import {NgModule} from '@angular/core';
import {MaterialModule} from '../../../material.module';
import {HomeRoutingModule} from './home.routing.module';
import {HomeComponent} from './home.component';
import {ComponentsModule} from '../../../components.module';
import {ProductsService} from '../../../shared/services/products/products.service';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared.module';
import {ProductModule} from '../product/product.module';
import {WindowRef} from '../../../shared/directives/WindowRef';


@NgModule({
    imports: [
        MaterialModule,
        ComponentsModule,
        HomeRoutingModule,
        CommonModule,
        SharedModule,
        ProductModule,
    ],
    declarations: [
        HomeComponent,
    ],
    providers: [
        ProductsService,
        WindowRef,
    ],

    entryComponents: []
})
export class HomeModule {
}
