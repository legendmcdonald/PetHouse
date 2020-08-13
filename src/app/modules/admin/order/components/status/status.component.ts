import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrderService} from '../../../../../shared/services/orders/order.service';
import {EmailService} from '../../../../../shared/services/email.service';
import {User} from '../../../../../shared/models/users/user';
import {Order} from '../../../../../shared/models/orders/order';


@Component({
    selector: 'app-admin-orders-status',
    templateUrl: './status.component.html',
})
export class StatusComponent implements OnInit {
    form: FormGroup;
    working = false;
    error = null;

    constructor(
        private orderService: OrderService,
        private emailService: EmailService,
        private fb: FormBuilder,
        private dialog: MatDialogRef<StatusComponent>,
        @Inject(MAT_DIALOG_DATA) private data) {
        this.form = this.fb.group({
            status: [data.status, [Validators.required]],
        });

    }

    ngOnInit() {

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
        const data = {
            status: parseInt(this.form.controls.status.value, 10)
        };
        this.orderService.set(this.data.id, data)
            .then((next) => {
                    this.working = false;
                    this.dialog.close(data);
                    this.sendEmail();
                }
            )
            .catch((error) => {
                this.error = (error.status === 0) ? error.message : error.error;
                this.working = false;
            });
        return false;
    }

    sendEmail() {
        const user = new User();
        user.email = 'appiahnanan8@gmail.com';
        user.name = 'doapp';
        const order = new Order();
        this.emailService.sendOrderUpdate(user, order);
    }

    close() {
        this.dialog.close();
    }
}
