import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../shared/services/products/product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../../shared/models/products/product';
import {EditComponent} from './components/edit/edit.component';
import {MatDialog} from '@angular/material';
import {ImageUploadComponent} from './components/image-upload/image-upload.component';


@Component({
    selector: 'app-admin-product',
    templateUrl: './admin-product.component.html',
    styleUrls: ['./admin-product.component.scss']
})

export class AdminProductComponent implements OnInit {
    breadcrumbs = [{label: '', params: '', url: '/admin', home: true},
        {label: 'Products', params: '', url: '/admin/products', home: false},
    ];
    displayedColumns = ['name', 'value'];
    product: Product = new Product();
    details = [];

    constructor(
        private productService: ProductService,
        private activatedRoute: ActivatedRoute,
        private dialog: MatDialog,
    ) {

    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.product.id = params['id'];
            this.load();
        });
    }

    openEditComponent() {
        const ref = this.dialog.open(EditComponent, {autoFocus: true, width: '480px', data: this.product});
        ref.afterClosed().subscribe(result => {
            if (result) {
                result.id = this.product.id;
                result.cover = this.product.cover;
                this.product = result;
            }
        });
    }

    openUploadComponent() {
        const ref = this.dialog.open(ImageUploadComponent, {
            autoFocus: true, minWidth: 400, data: {
                productId: this.product.id, cover: this.product.cover
            }
        });
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.product.cover = result.cover;
            }
        });
    }

    // -----------------------
    load() {
        const subscription = this.productService.get(this.product.id).subscribe(
            (next) => {
                this.product = next;
                this.breadcrumbs.push({label: next.name, params: '', url: '/admin/products/' + next.id, home: false});
                this.updateDetails();
                subscription.unsubscribe();

            },
            () => {
                subscription.unsubscribe();
            }
        );
    }

    updateDetails() {
        this.details.push({
            name: 'Pets',
            value: this.product.type
        });
    }
}



