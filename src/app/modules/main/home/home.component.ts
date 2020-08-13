import {Component, OnInit} from '@angular/core';
import {WindowRef} from '../../../shared/directives/WindowRef';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    imageWidth = 300;

    constructor(
        private winRef: WindowRef,
        private router: Router,
    ) {
        this.calcDimension(winRef.nativeWindow.innerWidth);
    }

    ngOnInit(): void {
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
            this.imageWidth = 300;
        } else if (width < 1280) {
            this.imageWidth = 320;
        } else {
            this.imageWidth = 500;
        }
    }

    navigateProducts() {
        this.router.navigate(['/products']);
    }
}


