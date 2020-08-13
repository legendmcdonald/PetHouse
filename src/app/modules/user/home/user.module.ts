import {NgModule} from '@angular/core';
import {UserRoutingModule} from './user.routing.module';
import {CommonModule} from "@angular/common";
import {MaterialModule} from "../../../material.module";
import {ComponentsModule} from "../../../components.module";
import {UserComponent} from "./user.component";
import {TileComponent} from "./components/tile/tile.component";


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ComponentsModule,
        UserRoutingModule,
    ],
    declarations: [
        UserComponent,
        TileComponent,
    ],
    providers: [],
    entryComponents: []
})
export class UserModule {
}
