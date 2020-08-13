import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UploadService} from "../../../../../shared/services/upload.service";
import {ProductService} from "../../../../../shared/services/products/product.service";


@Component({
    selector: 'app-admin-products-add',
    templateUrl: './image-upload.component.html',
})
export class ImageUploadComponent implements OnInit {
    form: FormGroup;
    working = false;
    error = null;

    constructor(
        private productService: ProductService,
        private imagesService: UploadService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<ImageUploadComponent>,
        @Inject(MAT_DIALOG_DATA) private data) {

        this.form = this.fb.group({
            'cover': [''],
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
        let data: any = {
            cover: cover,
        };
        this.productService.set(this.data.productId, data)
            .then(() => {
                    this.working = false;
                    this.dialog.close(data);
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
