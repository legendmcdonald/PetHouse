import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductTracksService} from "../../../../../../../shared/services/products/product-tracks.service";
import {ProductService} from "../../../../../../../shared/services/products/product.service";


@Component({
    selector: 'app-admin-product-tracks-add',
    templateUrl: './tracks-add.component.html',
})
export class TracksAddComponent implements OnInit {
    form: FormGroup;
    working = false;
    error = null;

    constructor(
        private productTracksService: ProductTracksService,
        private productService: ProductService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<TracksAddComponent>,
        @Inject(MAT_DIALOG_DATA) private data) {

        this.form = this.fb.group({
            'name': ['', [Validators.required, Validators.minLength(1)]],
            'duration': [0, [Validators.required, Validators.pattern("^[0-9]*$")]],
            'description': [''],
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

        let data: any = {
            productId: this.data,
            name: this.form.controls.name.value,
            duration: parseInt(this.form.controls.duration.value, 10),
            sample: null,
        };

        this.productTracksService.add(data)
            .then((next) => {
                this.working = false;
                this.dialog.close(next);
            })
            .catch((error) => {
                this.error = (error.status === 0) ? error.message : error.error;
                this.working = false;
            });
        return false;
    }

    close() {
        this.dialog.close();
    }
}
