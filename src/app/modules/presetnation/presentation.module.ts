import {NgModule} from '@angular/core';
import {PresentationComponent} from './presentation.component';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../../components.module';
import {SharedModule} from '../../shared.module';
import {MaterialModule} from '../../material.module';
import {PresentationRoutingModule} from './presentation.routing.module';



@NgModule({
    imports: [
        MaterialModule,
        ComponentsModule,
        PresentationRoutingModule,
        CommonModule,
        SharedModule,
    ],
    declarations: [
        PresentationComponent,

    ],
    providers: [

    ],
    entryComponents: [

    ]
})
export class PresentationModule {
}
