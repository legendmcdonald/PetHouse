import {NgModule} from '@angular/core';
import {AlertComponent} from './shared/components/alert/alert.component';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';
import {CounterComponent} from './shared/components/counter/counter.component';
import {MaintenanceComponent} from './shared/components/maintenance/maintenance.component';
import {SvgLoaderComponent} from './shared/components/svg-loader/svg-loader.component';
import {FooterComponent} from './components/footer/footer.component';
import {MatIconModule} from '@angular/material';


@NgModule({
    declarations: [
        AlertComponent,
        PageNotFoundComponent,
        CounterComponent,
        MaintenanceComponent,
        SvgLoaderComponent,
        FooterComponent,
    ],
    imports: [
        MatIconModule
    ],
    exports: [
        AlertComponent,
        PageNotFoundComponent,
        CounterComponent,
        MaintenanceComponent,
        SvgLoaderComponent,
        FooterComponent,
    ]
})
export class ComponentsModule {
}
