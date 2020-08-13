import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../shared/services/products/product.service';
import {ActivatedRoute} from '@angular/router';
import {BasketService} from '../../../shared/services/basket/basket.service';
import {AuthenticationService} from '../../../shared/services/authentication.service';
import {EventsService} from '../../../shared/services/events.service';
import {WindowRef} from '../../../shared/directives/WindowRef';
import {Product} from '../../../shared/models/products/product';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
    product: Product = new Product();
    imageWidth = 30;

    constructor(
        private productService: ProductService,
        private basketService: BasketService,
        private authenticationService: AuthenticationService,
        private eventsService: EventsService,
        private activatedRoute: ActivatedRoute,
        private winRef: WindowRef,
    ) {
        this.calcDimension(winRef.nativeWindow.innerWidth);
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.product.id = params.id;
            this.load();
        });
    }

    buy() {
        if (this.authenticationService.isAdmin()) {
            alert('Login as user to be able to buy');
            return;
        }
        if (!this.authenticationService.isAuthenticated()) {
            this.eventsService.emit('LOGIN-SHOW');
            return;
        }
        this.basketService.add(this.product.id);
    }

    onResize(event) {
        this.calcDimension(event.target.innerWidth);
    }

    calcDimension(width) {
        if (width < 400) {
            this.imageWidth = 300;
        } else if (width < 600) {
            this.imageWidth = 300;
        } else if (width < 960) {
            this.imageWidth = 400;
        } else if (width < 1280) {
            this.imageWidth = 500;
        } else {
            this.imageWidth = 600;
        }
    }

    load() {
        const subscription = this.productService.get(this.product.id).subscribe(
            (next) => {
                this.product = next;
                subscription.unsubscribe();
            },
            () => {
                subscription.unsubscribe();
            }
        );
    }
}



