import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';


import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
      ]
    }).compileComponents();

    router = TestBed.get(Router);
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create form n init', () => {
    component.ngOnInit();

    expect(component.form).not.toBeUndefined();
  });

  it('should go to home page on login', () => {
      spyOn(router, 'navigate');
      component.login();
      expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

});
