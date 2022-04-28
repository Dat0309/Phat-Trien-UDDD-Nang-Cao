import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountServiceService } from 'src/app/service/account/account-service.service';
import { User } from 'src/model/user';
import { LoginPageForm } from './login.page.form';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  user: User;
  check = false;

  // eslint-disable-next-line max-len
  constructor(private router: Router, private formBuilder: FormBuilder, private accountService: AccountServiceService, private alertController: AlertController) {
  }

  addAccount() {
    // eslint-disable-next-line max-len
    if(!this.checkAccount()){
      this.accountService.addAccount(this.form.get('email').value, this.form.get('password').value)
    .then( resolve => {
      this.showAlert('Thêm người dùng', 'Thêm tài khoản thành công');
    });
    }
    else{
      this.showAlert('Thêm người dùng', 'Tài khoản đã tồn tại');
    }
  }

  checkAccount(){
    if(this.accountService.getAccount('email') != null){
      this.check  = true;
      return this.check;
    }
  }

  getAllAccount(){
    this.accountService.getAllAccount();
  }

  ngOnInit() {
    this.user = new User();
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  login() {
    if (this.form.get('email').value === this.user.email && this.form.get('password').value === this.user.password) {
      this.router.navigate(['home']);
    }
  }

  async showAlert(title: string, msg: string) {
    this.alertController.create({
      header: title,
      subHeader: 'Subtitle for alert',
      message: msg,
      buttons: ['OK']
    }).then(res => {

      res.present();

    });
  }

}
