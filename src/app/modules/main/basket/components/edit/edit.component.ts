import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BasketService} from "../../../../../shared/services/basket/basket.service";


@Component({
    selector: 'app-main-basket-edit',
    templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
    form: FormGroup;
    working = false;
    error = null;

    constructor(
        private basketService: BasketService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<EditComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any) {
        this.form = this.fb.group({
            count: [data.count, [Validators.required, Validators.min(0), Validators.pattern("^[0-9]*$")]],
        });
    }

    ngOnInit() {

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

        if (this.form.controls.count.value <= 0) {
            this.basketService.delete(this.data.id);
        } else {
            this.basketService.update(this.data.id, this.form.controls.count.value);
        }

        this.data.count = this.form.controls.count.value;

        this.working = false;
        this.dialog.close(this.data);

        return false;

    }

    close() {
        this.dialog.close();
    }
}
