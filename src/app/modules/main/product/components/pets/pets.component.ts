import {Component, Input, OnInit} from '@angular/core';
import {ItemsComponent} from '../../../../../shared/components/items/items.component';
import {ProductPetsService} from '../../../../../shared/services/products/product-pets.service';
import {Pets} from '../../../../../shared/models/pets/pets';
import {ActivatedRoute} from '@angular/router';

import {EventsService} from '../../../../../shared/services/events.service';


@Component({
    selector: 'app-main-product-tracks',
    templateUrl: './pets.component.html',
})
export class PetsComponent extends ItemsComponent<Pets> implements OnInit {
    displayedColumns = ['name', 'created_at', 'duration', 'play'];

    @Input() productId;

    constructor(
        private activatedRoute: ActivatedRoute,
        private tracksService: ProductPetsService,
        private eventsService: EventsService,
    ) {
        super();
    }

    ngOnInit(): void {
        this.get();
    }

    // ----------------------
    play(item) {
        this.eventsService.emit('PLAYER-SHOW');
    }



    // ----------------------
    get() {
        const subscription = this.tracksService.get(this.productId).subscribe(
            (data) => {
                this.set(data);
                subscription.unsubscribe();
            },
            (error) => {
                subscription.unsubscribe();
            }
        );

    }
}

