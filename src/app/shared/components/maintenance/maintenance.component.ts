import {Component, Input, OnInit} from '@angular/core';

import './maintenance.component.css';

@Component({
    selector: 'app-duration',
    templateUrl: './maintenance.component.html',
})
export class MaintenanceComponent implements OnInit {
    @Input()
    set value(value: any) {
    }
    ngOnInit(): void {

    }
}


