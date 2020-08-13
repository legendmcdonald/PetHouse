import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder} from '@angular/forms';
import {ProductService} from '../../../../../shared/services/products/product.service';
import {ProductsService} from '../../../../../shared/services/products/products.service';


@Component({
    selector: 'app-admin-products-delete',
    templateUrl: './delete.component.html',
})
export class DeleteComponent implements OnInit {
    working = false;
    error = null;

    constructor(
        private productService: ProductService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<DeleteComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any) {
    }

    ngOnInit() {

    }

    save() {
        this.working = true;
        this.error = null;
        this.productService.delete(this.data.id)
            .then((next) => {
                this.working = false;
                this.dialog.close(this.data);
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
