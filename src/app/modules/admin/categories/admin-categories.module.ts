import {NgModule} from '@angular/core';


import {AdminCategoriesRoutingModule} from './admin-categories.routing.module';

import {AdminCategoriesComponent} from './admin-categories.component';
import {MaterialModule} from "../../../material.module";
import {CategoriesService} from "../../../shared/services/categoreis/categories.service";
import {AddComponent} from "./components/add/add.component";
import {DeleteComponent} from "./components/delete/delete.component";
import {ComponentsModule} from "../../../components.module";
import {CommonModule} from "@angular/common";
import {CategoryService} from "../../../shared/services/categoreis/category.service";


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ComponentsModule,
        AdminCategoriesRoutingModule,
    ],
    declarations: [
        AdminCategoriesComponent,
        AddComponent,
        DeleteComponent,

    ],
    providers: [
        CategoriesService,
        CategoryService,
    ],
    entryComponents: [
        AddComponent,
        DeleteComponent,
    ]
})
export class AdminCategoriesModule {
}
