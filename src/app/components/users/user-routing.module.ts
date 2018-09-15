import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


const userRoutes: Routes = [
  // { path: '',  component: UserLoginComponent },
  { path: 'login',  component: UserLoginComponent },
  { path: 'registration', component: UserRegistrationComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },
  { path: 'changepassword', component: ChangePasswordComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
