import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin.routing.module';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../../material.module';
import {ComponentsModule} from '../../../components.module';
import {AdminComponent} from './admin.component';
import {TileComponent} from './components/tile/tile.component';
import {ProductsService} from '../../../shared/services/products/products.service';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ComponentsModule,
        AdminRoutingModule,
    ],
    declarations: [
        AdminComponent,
        TileComponent,
    ],
    providers: [
        ProductsService,
    ],
    entryComponents: []
})
export class AdminModule {
}
