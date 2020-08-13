import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AuthenticationService} from "../../shared/services/authentication.service";


@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
    working = false;
    error = null;

    constructor(
        private authenticationService: AuthenticationService,
        private dialog: MatDialogRef<LogoutComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

    }

    ngOnInit() {

    }

    logout() {
        this.authenticationService.logout();
        this.dialog.close(200);
        return false;
    }

    close() {
        this.dialog.close();
    }
}
