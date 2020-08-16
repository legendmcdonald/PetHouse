import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../../../components.module';
import {ProductComponent} from './product.component';
import {ProductService} from '../../../shared/services/products/product.service';
import {ProductRoutingModule} from './product.routing.module';
import {MaterialModule} from '../../../material.module';
import {PetsComponent} from './components/pets/pets.component';
import {ProductPetsService} from '../../../shared/services/products/product-pets.service';
import {SharedModule} from '../../../shared.module';
import {BasketService} from '../../../shared/services/basket/basket.service';
import {LocalStorageService} from '../../../shared/services/local-storage.service';
import {InfoComponent} from './components/info/info.component';


@NgModule({
    imports: [
        MaterialModule,
        ComponentsModule,
        CommonModule,
        SharedModule,
        ProductRoutingModule,
    ],
    declarations: [
        ProductComponent,
        PetsComponent,
        InfoComponent,
    ],
    providers: [
        ProductService,
        ProductPetsService,
        LocalStorageService,
        BasketService,
    ],
    exports: [
    ],
    entryComponents: []
})
export class ProductModule {
}
