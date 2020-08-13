import {NgModule} from '@angular/core';
import {AddressRoutingModule} from './address.routing.module';
import {CommonModule} from "@angular/common";
import {MaterialModule} from "../../../material.module";
import {ComponentsModule} from "../../../components.module";
import {UserAddressesService} from "../../../shared/services/user/user-addresses.service";
import {AddressComponent} from "./address.component";


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ComponentsModule,
        AddressRoutingModule,
    ],
    declarations: [
        AddressComponent,
    ],
    providers: [
        UserAddressesService,
    ],
    entryComponents: []
})
export class AddressModule {
}
