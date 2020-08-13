import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from "../../shared/services/authentication.service";


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    form: FormGroup;
    working = false;
    error = null;

    constructor(
        private authenticationService: AuthenticationService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<RegisterComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

        this.form = this.fb.group({
            'name': ['', [Validators.required, Validators.minLength(4)]],
            'email': ['', [Validators.required, Validators.email]],
            'password': ['', [Validators.required, Validators.minLength(4)]],
        });
    }

    ngOnInit() {

    }

    register() {
        if (!this.form.valid) {
            Object.keys(this.form.controls).forEach(field => {
                const control = this.form.get(field);
                control.markAsTouched({onlySelf: true});
            });
            return false;
        }
        this.working = true;
        this.error = null;

        this.authenticationService.register(this.form.value.name, this.form.value.email, this.form.value.password)
            .then(
                (value) => {
                    this.working = false;
                    this.dialog.close();
                    this.dialog.close(value);
                }
            )
            .catch((error) => {
                this.working = false;
                this.error = error;
            })
        ;
        return false;
    }

    close() {
        this.dialog.close();
    }
}

