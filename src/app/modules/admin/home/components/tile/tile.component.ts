import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';

@Component({
    selector: 'app-admin-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
    backgroundColor = '#fff';
    iconColor = '';
    count = 0;
    showInfo = false;

    _color = '';

    @Input() url;
    @Input() text;
    @Input()
    set color(value) {
        this._color = value;
        this.iconColor = value;
    }

    @Input() icon;
    @Input() colspan;
    @Input() rowspan;

    constructor(
        private dialog: MatDialog,
        private router: Router,
    ) {

    }

    ngOnInit(): void {

    }

    navigate() {
        this.router.navigate([this.url]);
    }

    mouseenter() {
        this.backgroundColor = this._color;
        this.iconColor = '#fff';
        this.showInfo = true;
    }

    mouseleave() {
        this.backgroundColor = '#fff';
        this.iconColor = this._color;
        this.showInfo = false;
    }
}
