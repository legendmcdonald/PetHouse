import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'app-products-filter',
    templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit {
    form: FormGroup;
    working = false;
    error = null;
    showRange = false;

    constructor(
        private fb: FormBuilder,
        private dialog: MatDialogRef<FilterComponent>,
        @Inject(MAT_DIALOG_DATA) private data) {

        this.form = this.fb.group({
            filter: [data.filter, [Validators.pattern('^[0-9]*$')]],
            operation: [data.operation, [Validators.required]],
            value: [data.value, [Validators.pattern('^[0-9]*$')]],
            fromValue: [data.fromValue, [Validators.pattern('^[0-9]*$')]],
            toValue: [data.toValue, [Validators.pattern('^[0-9]*$')]],
            sortType: [data.sortType, [Validators.required]],
            sortField: [data.sortField, [Validators.required]],
        });
        this.selectionChange();
    }

    ngOnInit() {

    }

    selectionChange() {
        this.showRange = this.form.controls.operation.value === 3;
    }

    save() {

        if (!this.form.valid) {
            Object.keys(this.form.controls).forEach(field => {
                const control = this.form.get(field);
                control.markAsTouched({onlySelf: true});
            });
            return false;
        }
        this.working = true;
        this.error = null;

        this.data.filter = this.form.controls.filter.value;
        this.data.value = parseInt(this.form.controls.value.value, 10);
        this.data.fromValue = parseInt(this.form.controls.fromValue.value, 10);
        this.data.toValue = parseInt(this.form.controls.toValue.value, 10);
        this.data.operation = parseInt(this.form.controls.operation.value, 10);
        this.data.sortType = this.form.controls.sortType.value;
        this.data.sortField = parseInt(this.form.controls.sortField.value, 10);
        this.dialog.close(this.data);

        return false;

    }

    close() {
        this.dialog.close();
    }
}
