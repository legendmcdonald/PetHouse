import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/users/user';
import {Order} from '../models/orders/order';


const key = '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';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + key,
        'X-No-CORS-Reason': 'https://sendgrid.com/docs/Classroom/Basics/API/cors.html',
        'Access-Control-Allow-Origin': 'https://sendgrid.api-docs.io'
    })
};

@Injectable()
export class EmailService {


    constructor(private httpClient: HttpClient) {

    }

    sendOrderUpdate(user: User, order: Order) {
        const message = 'Hello ' + user.name + ',<br><br>' +
            'The status of order #' + order.id + ' has been updated to \\\"' + order.status + '\\\".<br><br>' +
            'Kind regards,<br><br>' +
            'Your webshop team';
        this.send('noreply@star-records.se', user.email,
            'Status update of order #' + order.id, message, 'text/html');
    }

    private send(from, to, subject, message, type = 'text/plain') {
        const url = 'https://api.sendgrid.com/v3/mail/send';

        const dataJson = '{\n' +
            '  "personalizations": [\n' +
            '    {\n' +
            '      "to": [\n' +
            '        {\n' +
            '          "email": "' + to + '"\n' +
            '        }\n' +
            '      ],\n' +
            '      "subject": "' + subject + '"\n' +
            '    }\n' +
            '  ],\n' +
            '  "from": {\n' +
            '    "email": "' + from + '"\n' +
            '  },\n' +
            '  "content": [\n' +
            '    {\n' +
            '      "type": "' + type + '",\n' +
            '      "value": "' + message + '"\n' +
            '    }\n' +
            '  ]\n' +
            '}';

        this.httpClient.post(url, dataJson, httpOptions).subscribe();
    }
}


