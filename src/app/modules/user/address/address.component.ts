import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../shared/services/authentication.service';
import {UserAddressesService} from '../../../shared/services/user/user-addresses.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-user-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
    breadcrumbs = [
        {label: '', params: '', url: '/user', home: true},
        {label: 'Address', params: '', url: '/user/address', home: false},
    ];


    form: FormGroup;
    working = false;
    error = null;

    constructor(
        private authenticationService: AuthenticationService,
        private userAddressesService: UserAddressesService,
        private router: Router,
        private fb: FormBuilder,
    ) {

        this.form = this.fb.group({
            city: ['', [Validators.required, Validators.minLength(1)]],
            email: ['', [Validators.required]],
            postalNumber: ['', [Validators.required, Validators.minLength(5)]],
            phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
            street: ['', [Validators.required]],
        });
    }

    ngOnInit() {
        this.get();
    }

    get() {
        if (!this.authenticationService.isAuthenticated()) {
            setTimeout(() => {
                this.get();
            }, 1000);
            return;
        }
        this.userAddressesService.get(this.authenticationService.getAccountId()).subscribe(
            (next) => {
                if (next !== undefined && next.data() !== undefined) {
                    this.form.controls.city.setValue(next.data().city);
                    this.form.controls.email.setValue(next.data().email);
                    this.form.controls.street.setValue(next.data().street);
                    this.form.controls.postalNumber.setValue(next.data().postalNumber);
                    this.form.controls.phoneNumber.setValue(next.data().phoneNumber);
                }
            },
            (error) => {
                console.log(error);
            }
        );
    }

    save() {
        if (!this.form.valid) {
            Object.keys(this.form.controls).forEach(field => {
                const control = this.form.get(field);
                control.markAsTouched({onlySelf: true});
            });
            return false;
        }
        this.working = true;
        this.error = null;

        this.userAddressesService.set(this.authenticationService.getAccount().id, {
            city: this.form.value.city,
            email: this.form.value.email,
            postalNumber: this.form.value.postalNumber,
            street: this.form.value.street,
            phoneNumber: this.form.value.phoneNumber

        }).then(() => {
            this.working = false;
            this.navigateHome();

        }).catch((error) => {
            this.working = false;
            this.error = error;
        });
        return false;
    }

    navigateHome() {
        this.router.navigate(['/user']);
    }
}
