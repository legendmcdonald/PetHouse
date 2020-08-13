import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder} from '@angular/forms';
import {ProductService} from '../../../../../../../shared/services/products/product.service';
import {ProductCategoriesService} from '../../../../../../../shared/services/products/product-categories.service';


@Component({
    selector: 'app-admin-product-categories-delete',
    templateUrl: './categories-delete.component.html',
})
export class CategoriesDeleteComponent implements OnInit {
    working = false;
    error = null;

    constructor(
        private productCategoriesService: ProductCategoriesService,
        private productService: ProductService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<CategoriesDeleteComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any) {

    }

    ngOnInit() {

    }

    save() {
        console.log(this.data.categoryId);
        this.working = true;
        this.error = null;
        this.productCategoriesService.delete(this.data.productId, this.data.category.id)
            .then((next) => {
                this.working = false;
                this.dialog.close(this.data.category);
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
