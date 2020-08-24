import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../../../components.module';
import {AdminProductComponent} from './admin-product.component';
import {ProductService} from '../../../shared/services/products/product.service';
import {AdminProductRoutingModule} from './admin-product.routing.module';
import {SharedModule} from '../../../shared.module';
import {ImageUploadComponent} from './components/image-upload/image-upload.component';
import {UploadService} from '../../../shared/services/upload.service';
import {EditComponent} from './components/edit/edit.component';
import {MaterialModule} from '../../../material.module';


@NgModule({
    imports: [
        ComponentsModule,
        CommonModule,
        SharedModule,
        AdminProductRoutingModule,
        MaterialModule,
    ],
    declarations: [
        AdminProductComponent,
        ImageUploadComponent,
        EditComponent,
    ],
    providers: [
        ProductService,
        UploadService,

    ],
    entryComponents: [
        EditComponent,
        ImageUploadComponent,
    ]

})
export class AdminProductModule {
}
