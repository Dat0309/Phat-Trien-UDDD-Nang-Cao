import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  user: User;

  constructor() {
    this.user =new User();
  }

  ngOnInit() {
  }

}
