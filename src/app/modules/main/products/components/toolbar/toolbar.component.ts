import {Component, Input, OnInit} from '@angular/core';
import {EventsService} from '../../../../../shared/services/events.service';


@Component({
    selector: 'app-products-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']

})
export class ToolbarComponent implements OnInit {
    _name = 'Pets';

    @Input()
    set name(value) {
        this._name = value;
    }

    constructor(private eventsService: EventsService) {
    }


    ngOnInit(): void {

    }

}
