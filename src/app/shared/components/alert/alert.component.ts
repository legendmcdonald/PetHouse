import {Component, Input, OnInit} from '@angular/core';

import './alert.component.css';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit {

    currentValue = '';
    _value: any;

    @Input()
    set value(value: any) {
        this.currentValue = this.render(value);
        this._value = value;
    }

    get value() {
        return this._value;
    }


    ngOnInit(): void {

    }

    renderObject(data) {
        let errorsHtml = '<ul>';
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                errorsHtml += '<li>' + key + this.render(data[key]) + '</li>';
            }
        }
        errorsHtml += '</ul>';
        return errorsHtml;
    }

    renderArray(data) {
        let errorsHtml = '<ul>';
        for (const key in data) {
            errorsHtml += '<li>' + data[key] + '</li>';
        }
        return errorsHtml + '</ul>';
    }

    render(data) {
        if (data === null) {
            return '';
        } else if (data instanceof Array) {
            return this.renderArray(data);
        } else if (data instanceof Object) {
            return this.renderObject(data);
        } else {
            return data;
        }
    }

}


