import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-svg-loader',
    templateUrl: './svg-loader.component.html',
    styleUrls: ['./svg-loader.component.scss'],
})
export class SvgLoaderComponent implements OnInit {


    constructor() {

    }


    ngOnInit(): void {

    }

    setState(stateName) {
        // var initialIconRef = this.el.querySelector("use").getAttribute("xlink:href");
        // var stateName = this.el.querySelector(initialIconRef).getAttribute("data-state");

    }
}


