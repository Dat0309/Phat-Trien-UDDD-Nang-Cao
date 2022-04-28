import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { InputMdule } from '../input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputMdule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
