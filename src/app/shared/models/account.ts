export class Account {
    id: string;
    name = '';
    admin = false;
    phoneNumber = '';
    email = '';
    creationTime = '';


    constructor(id, email) {
        this.id = id;
        this.email = email;
    }
}
