import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder} from '@angular/forms';
import {ProductTrackService} from "../../../../../../../shared/services/products/product-track.service";


@Component({
    selector: 'app-admin-product-tracks-delete',
    templateUrl: './tracks-delete.component.html',
})
export class TracksDeleteComponent implements OnInit {
    working = false;
    error = null;

    constructor(
        private productTrackService: ProductTrackService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<TracksDeleteComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any) {

    }

    ngOnInit() {

    }

    save() {
        this.working = true;
        this.error = null;

        this.productTrackService.delete(this.data.productId, this.data.id, this.data.duration)
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
