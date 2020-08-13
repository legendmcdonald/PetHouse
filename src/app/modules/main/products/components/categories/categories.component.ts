import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {CategoriesService} from '../../../../../shared/services/categoreis/categories.service';
import {Category} from '../../../../../shared/models/categories/category';
import {EventsService} from '../../../../../shared/services/events.service';
import {flip3DAnimation} from '../../../../../shared/animations/flip-3d-animation';

@Component({
    selector: 'app-products-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
    animations: [flip3DAnimation],
})
export class CategoriesComponent implements OnInit, OnDestroy {

    visible = false;
    categories: Category[] = [];
    albums = -1;

    @Output() categoryChanged = new EventEmitter<Category>();

    constructor(
        private categoriesService: CategoriesService,
        private eventsService: EventsService,
    ) {

    }

    ngOnInit(): void {
        this.get();
        this.registerShowEvent();
    }

    ngOnDestroy(): void {
        this.unregisterShowEvent();
    }

    private registerShowEvent() {
        this.eventsService.registerEvent('PRODUCTS-CATEGORIES-SHOW', this, () => {
            this.show();
        });
    }

    private unregisterShowEvent() {
        this.eventsService.unregisterEvent('PRODUCTS-CATEGORIES-SHOW', this);
    }

    get() {
        const subscription = this.categoriesService.get()
            .subscribe((data) => {
                this.updateElements(data);
                subscription.unsubscribe();
            })
        ;
    }

    getShowState() {
        return this.visible ? 'in' : 'out';
    }

    show() {
        this.visible = true;
        this.eventsService.emit('MENU-HIDE');
    }

    hide() {
        this.visible = false;
        this.eventsService.emit('MENU-SHOW');
    }

    updateElements(data) {
        // find the lowest count
        //
        let min = 0;
        let max = 0;
        if (data.length > 0) {
            min = data[0].count;
            max = data[0].count;
        }
        for (let i = 1; i < data.length; ++i) {
            if (data[i].count < min) {
                min = data[i].count;
            }
            if (data[i].count > max) {
                max = data[i].count;
            }
        }
        if (min === 0) {
            min = 1;
        }
        if (max === 0) {
            max = 1;
        }

        for (let i = 0; i < data.length; ++i) {
            data[i].scale = 1 + (data[i].count - min) * min / max;
        }
        this.categories = data;
    }


    changeCategory(element) {
        this.hide();
        this.categoryChanged.emit(element);
    }

    getScale(element) {
        if (element.scale === undefined) {
            return 'scale(1.0)';
        }
        return 'scale(' + element.scale + ')';
    }

    mouseEnter(element) {
        this.albums = element.count;
    }

    mouseLeave(element) {
        this.albums = -1;
    }
}
