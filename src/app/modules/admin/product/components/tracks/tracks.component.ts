import {Component, Input, OnInit} from '@angular/core';
import {TracksAddComponent} from "./components/add/tracks-add.component";
import {MatDialog} from "@angular/material";
import {ItemsComponent} from "../../../../../shared/components/items/items.component";
import {ProductTracksService} from "../../../../../shared/services/products/product-tracks.service";
import {Track} from "../../../../../shared/models/tracks/track";
import {ActivatedRoute} from "@angular/router";
import {TracksDeleteComponent} from "./components/delete/tracks-delete.component";
import {TrackUploadComponent} from "./components/track-upload/track-upload.component";


@Component({
    selector: 'app-product-tracks',
    templateUrl: './tracks.component.html',
})
export class TracksComponent extends ItemsComponent<Track> implements OnInit {
    displayedColumns = ['name', 'created_at', 'sample', 'duration', 'edit'];

    @Input() productId;

    constructor(
        private activatedRoute: ActivatedRoute,
        private tracksService: ProductTracksService,
        private dialog: MatDialog,
    ) {
        super();
    }

    ngOnInit(): void {
        this.get();
    }

    // ----------------------
    openAddDialog() {
        const ref = this.dialog.open(TracksAddComponent, {
            autoFocus: true,
            width: '480px',
            data: this.productId
        });
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.add(result);
            }
        });
    }

    // ----------------------
    openTrackDeleteComponent(element) {
        const ref = this.dialog.open(TracksDeleteComponent, {autoFocus: true, width: '480px', data: element});
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.delete(result);
            }
        });
    }

    openTrackUploadComponent(element) {
        const ref = this.dialog.open(TrackUploadComponent, {autoFocus: true, width: '480px', data: element});
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.updateItem(result);
            }
        });
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

