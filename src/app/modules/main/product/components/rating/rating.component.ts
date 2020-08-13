import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../../../shared/services/authentication.service';
import {ProductRatingsService} from '../../../../../shared/services/products/product-ratings.service';
import {EventsService} from '../../../../../shared/services/events.service';

class RateElement {
    id: number;
    rated: boolean;
}

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
    _rating = 0;

    @Input()
    set rating(value: number) {
        if (value === undefined) {
            return;
        }
        this._rating = value;
        this.updateRating(value);
    }

    rated = false;
    @Input() clickable = true;
    @Input() productId: string;

    @Input() voters = null;

    stars: RateElement[] = [
        {id: 1, rated: false},
        {id: 2, rated: false},
        {id: 3, rated: false},
        {id: 4, rated: false},
        {id: 5, rated: false},
    ];

    constructor(
        private productRatingsService: ProductRatingsService,
        private authenticationService: AuthenticationService,
        private eventsService: EventsService,
    ) {

    }

    ngOnInit() {
        this.getUserRating();
    }

    updateRating(value: number, rated: boolean = true) {
        for (let i = 0; i < 5; ++i) {
            this.stars[i].rated = i < value ? rated : false;
        }
    }

    mouseOver(elem: RateElement) {
        if (!this.clickable || this.rated) {
            return;
        }
        this.updateRating(elem.id);
    }

    mouseLeave(elem: RateElement) {
        if (!this.clickable || this.rated) {
            return;
        }
        this.updateRating(this._rating);
    }

    // -----------------
    getUserRating() {
        if (!this.authenticationService.isAuthenticated()) {
            return;
        }
        const subscription = this.productRatingsService.get(this.productId, this.authenticationService.getAccountId())
            .subscribe((next) => {
                    if (next.size > 0) {
                        this.rated = true;
                    }
                    subscription.unsubscribe();
                },
                (error) => {
                    subscription.unsubscribe();
                }
            );
    }

    setUserRating(elem: RateElement): void {
        if (!this.clickable) {
            return;
        }
        if (this.authenticationService.isAdmin()) {
            alert('Login as user to be able to rate');
            return;
        }
        if (!this.authenticationService.isAuthenticated()) {
            this.eventsService.emit('LOGIN-SHOW');
            return;
        }
        if (this.rated) {
            return;
        }
        this.productRatingsService.add(this.productId, this.authenticationService.getAccountId(), elem.id)
            .then((next) => {
                this.rated = true;
                this.updateRating(next);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

