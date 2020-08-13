import {NgModule} from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatOptionModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatSidenavModule, MatChipsModule, MatBadgeModule, MatStepperModule, MatSliderModule,
} from '@angular/material';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {InputFileComponent} from './shared/components/input-file/input-file.component';
import {BreadcrumbComponent} from './shared/components/breadcrumb/breadcrumb.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        InputFileComponent,
        BreadcrumbComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,

        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatListModule,
        MatGridListModule,
        MatTableModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTooltipModule,
        MatInputModule,
        MatTabsModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatChipsModule,
        MatBadgeModule,
        MatStepperModule,
        MatSliderModule,

        FlexLayoutModule,
        CommonModule,
        RouterModule,
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MatStepperModule,

        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatListModule,
        MatGridListModule,
        MatTableModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTooltipModule,
        MatInputModule,
        MatTabsModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatSidenavModule,
        MatChipsModule,
        FlexLayoutModule,
        MatBadgeModule,
        MatSliderModule,

        InputFileComponent,
        BreadcrumbComponent,
    ],
    providers: [],
    entryComponents: []
})
export class MaterialModule {
}
