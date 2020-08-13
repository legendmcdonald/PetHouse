import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder} from '@angular/forms';
import {CategoryService} from "../../../../../shared/services/categoreis/category.service";
import {BasketService} from "../../../../../shared/services/basket/basket.service";


@Component({
    selector: 'app-main-basket-delete',
    templateUrl: './delete.component.html',
})
export class DeleteComponent implements OnInit {
    working = false;
    error = null;

    constructor(
        private basketService: BasketService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<DeleteComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any) {
    }

    ngOnInit() {

    }

    save() {
        this.working = true;
        this.error = null;
        this.basketService.delete(this.data.id)
        ;
        this.working = false;
        this.dialog.close(this.data);

        return false;

    }

    close() {
        this.dialog.close();
    }
}
