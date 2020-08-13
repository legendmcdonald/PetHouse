import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../../../shared/services/categoreis/categories.service';
import {AddComponent} from './components/add/add.component';
import {MatDialog} from '@angular/material';
import {Category} from '../../../shared/models/categories/category';
import {ItemsComponent} from '../../../shared/components/items/items.component';
import {DeleteComponent} from './components/delete/delete.component';


@Component({
    selector: 'app-admin-categories',
    templateUrl: './admin-categories.component.html',
})
export class AdminCategoriesComponent extends ItemsComponent<Category> implements OnInit {
    breadcrumbs = [{label: '', params: '', url: '/admin', home: true},
        {label: 'Categories', params: '', url: '/admin/categories', home: false}
    ];
    displayedColumns = ['name', 'albums', 'description', 'edit'];

    constructor(
        private categoriesService: CategoriesService,
        private dialog: MatDialog,
    ) {
        super();
    }

    ngOnInit(): void {
        this.get();
    }

    // ----------------------
    openAddDialog() {
        const ref = this.dialog.open(AddComponent, {autoFocus: true, width: '480px'});
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.add(result);
            }
        });
    }

    // ----------------------
    openCategoryDeleteComponent(element) {
        const ref = this.dialog.open(DeleteComponent, {autoFocus: true, width: '480px', data: element});
        ref.afterClosed()
            .subscribe((next) => {
                if (next) {
                    this.delete(next);
                }
            });
    }

    // ----------------------
    get() {
        const subscription = this.categoriesService.get()
            .subscribe((data) => {
                this.set(data);
                subscription.unsubscribe();
            })
        ;
    }
}

