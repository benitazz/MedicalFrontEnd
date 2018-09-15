import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ControlsModule } from '../../controls/controls.module';
import { CustomValidationsModule } from '../../custom-validations/custom-validations.module';

import { AdminComponent } from './admin/admin.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserRoutingModule  } from './user-routing.module';

import { ShowHidePasswordModule } from 'ngx-show-hide-password';

@NgModule({
  imports: [
    ControlsModule,
    CommonModule,
    CustomValidationsModule,
    FormsModule,
    RouterModule,
    UserRoutingModule,
    ShowHidePasswordModule
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
