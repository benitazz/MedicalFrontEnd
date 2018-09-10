import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserRoutingModule  } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UserRoutingModule
  ],
  declarations: [
    AdminComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    ResetPasswordComponent
  ],
  exports: [
    AdminComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    ResetPasswordComponent
  ]
})
export class UsersModule { }
