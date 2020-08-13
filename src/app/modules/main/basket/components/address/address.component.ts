import {Component, OnInit} from '@angular/core';
import {UserAddressesService} from '../../../../../shared/services/user/user-addresses.service';
import {AuthenticationService} from '../../../../../shared/services/authentication.service';

@Component({
    selector: 'app-main-basket-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {

    city = '';
    street = '';
    postalNumber = '';
    phoneNumber = '';
    email = '';
    constructor(
        private userAddressesService: UserAddressesService,
        private authenticationService: AuthenticationService,
    ) {

    }

    ngOnInit(): void {
        this.getAddress();
    }

    getAddress() {
        this.userAddressesService.get(this.authenticationService.getAccountId()).subscribe(
            (next) => {
                if (next !== undefined) {
                    this.city = (next.data().city);
                    this.street = (next.data().street);
                    this.postalNumber = (next.data().postalNumber);
                    this.phoneNumber = (next.data().phoneNumber);
                    this.email = (next.data().email);
                }
            },
            (error) => {
                console.log(error);
            }
        );
    }
}
