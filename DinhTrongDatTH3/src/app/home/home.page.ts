import { Component } from '@angular/core';
import { User } from 'src/model/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: User;

  constructor() {
    this.user = new User();
  }

}
