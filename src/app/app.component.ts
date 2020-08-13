import {Component, isDevMode, OnInit} from '@angular/core';

import {MaintenanceService} from './shared/services/maintenance.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        private maintenanceService: MaintenanceService,
    ) {

    }

    ngOnInit(): void {
        // this.maintenanceService.fixProductsDurationAndTracks();
    }

}
