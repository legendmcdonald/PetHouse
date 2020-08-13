import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductCategoriesService} from '../../../../../../../shared/services/products/product-categories.service';
import {CategoriesService} from '../../../../../../../shared/services/categoreis/categories.service';


@Component({
    selector: 'app-admin-product-categories-add',
    templateUrl: './categories-add.component.html',
})
export class CategoriesAddComponent implements OnInit {
    form: FormGroup;
    working = false;
    error = null;

    categories: any[] = [];

    constructor(
        private productCategoriesService: ProductCategoriesService,
        private categoriesService: CategoriesService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<CategoriesAddComponent>,
        @Inject(MAT_DIALOG_DATA) private data) {
        this.form = this.fb.group({
            category_id: ['', [Validators.required]],
        });
    }

    ngOnInit() {
        this.getCategories();
    }

    getCategories() {
        this.productCategoriesService.getAvailable(this.data.productId)
            .then((next) => {
                this.categories = next;
            })
            .catch((error) => {

            });
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

        this.productCategoriesService.add(this.data.productId, this.form.controls.category_id.value)
            .then((next) => {
                this.working = false;
                this.dialog.close(this.categories.find((element) => {
                    return element.id === this.form.controls.category_id.value;
                }));
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
