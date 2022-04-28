import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { LoginPageForm } from './login.page.form';

describe('LoginPage', () => {
  let component: LoginPageForm;
  let form: FormGroup;

  beforeEach(waitForAsync(() => {
    component = new LoginPageForm(new FormBuilder());
    form = component.createForm();
  }));

  it('should create login form empty', () => {
    expect(form).not.toBeNull();
    expect(form.get('email')).not.toBeNull();
    expect(form.get('email').value).toEqual('');
    expect(form.get('email').valid).toBeFalsy();
    expect(form.get('password')).not.toBeNull();
    expect(form.get('password').value).toEqual('');
    expect(form.get('password').valid).toBeFalsy();
    expect(component).toBeTruthy();
  });

  it('should have email invalid if email is not valid', () => {
    form.get('email').setValue('invalid email');

    expect(form.get('email').valid).toBeFalsy();
  });

  it('should have email valid if email is valid', () => {
    form.get('email').setValue('valid@email.com');

    expect(form.get('email').valid).toBeTruthy();
  });

  it('should have a valid form', () => {
    form.get('email').setValue('valid@email.com');
    form.get('password').setValue('anypassword');

    expect(form.valid).toBeTruthy();
  });

});
