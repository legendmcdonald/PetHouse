import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../../../../../shared/services/products/products.service';
import {UploadService} from '../../../../../shared/services/upload.service';


@Component({
    selector: 'app-admin-products-add',
    templateUrl: './add.component.html',
})
export class AddComponent implements OnInit {
    form: FormGroup;
    working = false;
    error = null;

    constructor(
        private productsService: ProductsService,
        private imagesService: UploadService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<AddComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(1)]],
            year: ['', [Validators.required, Validators.minLength(4)]],
            type: ['', [Validators.required, Validators.minLength(1)]],
            price: [0, [Validators.required]],
            cover: [''],
            description: [''],
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

        this.uploadImage();
        return false;
    }

    checkName() {
        this.productsService.has(this.form.controls.name.value).subscribe(
            (next) => {
                console.log(next);
            },
            (error) => {
                this.working = true;
                this.error = error;
            }
        );
    }

    uploadImage() {
        if (this.form.controls.cover.value !== '') {
            const name = new Date().getTime() + '-' + Math.random().toString(36).substring(2);
            this.imagesService.upload('/products/covers/', name, this.form.controls.cover.value.files[0])
                .then((data) => {
                    this.saveProduct(data);
                })
                .catch((error) => {
                    this.working = true;
                    this.error = error;
                });
        } else {
            this.saveProduct('');
        }
    }

    saveProduct(cover) {
        const data: any = {
            name: this.form.controls.name.value,
            year: this.form.controls.year.value,
            type: this.form.controls.type.value,
            price: this.form.controls.price.value,
            description: this.form.controls.description.value,
            cover,
            total: 0,
        };
        this.productsService.add(data)
            .then((next) => {
                    this.working = false;
                    this.dialog.close(next);
                }
            )
            .catch((error) => {
                this.error = (error.status === 0) ? error.message : error.error;
                this.working = false;
            });
    }

    close() {
        this.dialog.close();
    }
}
