import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../../../components.module';
import {AdminProductComponent} from './admin-product.component';
import {ProductService} from '../../../shared/services/products/product.service';
import {AdminProductRoutingModule} from './admin-product.routing.module';
import {MaterialModule} from '../../../material.module';
import {TracksComponent} from './components/tracks/tracks.component';
import {ProductTracksService} from '../../../shared/services/products/product-tracks.service';
import {ProductTrackService} from '../../../shared/services/products/product-track.service';
import {TracksAddComponent} from './components/tracks/components/add/tracks-add.component';
import {TracksDeleteComponent} from './components/tracks/components/delete/tracks-delete.component';
import {CategoriesAddComponent} from './components/categories/components/add/categories-add.component';
import {CategoriesDeleteComponent} from './components/categories/components/delete/categories-delete.component';
import {ProductCategoriesService} from '../../../shared/services/products/product-categories.service';
import {CategoriesComponent} from './components/categories/categories.component';
import {CategoriesService} from '../../../shared/services/categoreis/categories.service';
import {SharedModule} from '../../../shared.module';
import {ImageUploadComponent} from './components/image-upload/image-upload.component';
import {UploadService} from '../../../shared/services/upload.service';
import {EditComponent} from './components/edit/edit.component';
import {TrackUploadComponent} from './components/tracks/components/track-upload/track-upload.component';


@NgModule({
    imports: [
        MaterialModule,
        ComponentsModule,
        CommonModule,
        SharedModule,
        AdminProductRoutingModule,
    ],
    declarations: [
        AdminProductComponent,
        TracksComponent,
        TracksAddComponent,
        TracksDeleteComponent,
        TrackUploadComponent,

        CategoriesComponent,
        CategoriesAddComponent,
        CategoriesDeleteComponent,

        ImageUploadComponent,
        EditComponent,
    ],
    providers: [
        ProductService,
        ProductTracksService,
        ProductTrackService,


        CategoriesService,

        UploadService,

        ProductCategoriesService,
    ],
    entryComponents: [
        TracksAddComponent,
        TracksDeleteComponent,
        TrackUploadComponent,

        CategoriesAddComponent,
        CategoriesDeleteComponent,

        EditComponent,
        ImageUploadComponent,
    ]

})
export class AdminProductModule {
}
