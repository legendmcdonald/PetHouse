import {Component, Input, OnInit} from '@angular/core';

import './duration.component.css';

@Component({
    selector: 'app-duration',
    templateUrl: './duration.component.html',
})
export class DurationComponent implements OnInit {

    currentValue = '';
    _value: any;

    @Input()
    set value(value: any) {
        this._value = value;
        this.render();
    }

    get value() {
        return this._value;
    }


    ngOnInit(): void {

    }

    render() {
        this.currentValue =
            this.getHours(this._value) + ':' +
            this.getMinutes(this._value) + ':' +
            this.getSeconds(this._value)
            ;
    }

    getHours(value) {
        return ("00" + Math.floor(value / 3600)).slice (-2);
    }

    getMinutes(value) {
        return ("00" + Math.floor(((value / 60) % 60))).slice (-2);
    }

    getSeconds(value) {
        return ("00" + Math.floor((value % 60))).slice (-2);
    }
}


