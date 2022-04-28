import { Injectable } from '@angular/core';

@Injectable()
export class User {
    name: string;
    email: string;
    password: string;
    money: string;

    constructor() {
        this.name = 'Đinh Trọng Đạt';
        this.email = 'dat@gmail.com';
        this.password = '123456';
        this.money = '5000000';
    }
}



