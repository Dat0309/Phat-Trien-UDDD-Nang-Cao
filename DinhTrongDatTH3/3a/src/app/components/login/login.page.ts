import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/model/user';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  user: User;

  constructor(private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.user = new User();
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  login(){
    if (this.form.get('email').value === this.user.email && this.form.get('password').value === this.user.password) {
      this.router.navigate(['home']);
    }
  }

}
