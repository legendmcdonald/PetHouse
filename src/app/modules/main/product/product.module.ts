import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../../../components.module';
import {ProductComponent} from './product.component';
import {ProductService} from '../../../shared/services/products/product.service';
import {ProductRoutingModule} from './product.routing.module';
import {MaterialModule} from '../../../material.module';
import {RatingComponent} from './components/rating/rating.component';
import {TracksComponent} from './components/tracks/tracks.component';
import {ProductTracksService} from '../../../shared/services/products/product-tracks.service';
import {SharedModule} from '../../../shared.module';
import {BasketService} from '../../../shared/services/basket/basket.service';
import {LocalStorageService} from '../../../shared/services/local-storage.service';
import {InfoComponent} from './components/info/info.component';
import {ProductRatingsService} from '../../../shared/services/products/product-ratings.service';


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
        TracksComponent,
        RatingComponent,
        InfoComponent,
    ],
    providers: [
        ProductService,
        ProductTracksService,
        ProductRatingsService,
        LocalStorageService,
        BasketService,
    ],
    exports: [
        RatingComponent
    ],
    entryComponents: []
})
export class ProductModule {
}
