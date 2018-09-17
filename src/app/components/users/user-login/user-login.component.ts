import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterStateSnapshot } from '@angular/router';

import { AuthService, BannerService } from '../../../services';
import { ModelFormBase, IBuildForm, ConstantMessage, NotFoundError, BadInput } from '../../../common';
import { IsBusyService } from './../../../common';
import { UserLogin } from './../../../models';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent extends ModelFormBase implements OnInit, IBuildForm {
  public invalidLogin: boolean;

  @ViewChild('loginForm') public userForm: NgForm;

  constructor(
    private _authService: AuthService,
    private _bannerService: BannerService,
    private _isBusy: IsBusyService,
    private _router: Router) {
    super();
  }

  public ngOnInit(): void {
    this.buildForm();
  }

  public signIn($credentials: UserLogin): void {
    this._isBusy.show();
    this._authService.login($credentials).subscribe(data => {
      this._isBusy.hide();
      this._router.navigate([`/uploads`]);
    }, (error) => {
      this._isBusy.hide();
      if (error instanceof NotFoundError) {
        this._bannerService.showError('The account does not exist, please create a new account.');
        return;
      }

      if (error instanceof BadInput) {
        this._bannerService.showError('Incorrect password or username.');
        return;
      }

      throw error;
    });
  }

  public buildForm(): void {
    this.formErrors = {
      inputEmail: '',
      inputPassword: ''
    };

    this.validationMessages = {
      inputEmail: {
        required: ConstantMessage.EMAIL_REQUIRED,
        invalidEmail: ConstantMessage.INVALID_EMAIL
      },
      inputPassword: { required: 'Password is required.' }
    };

    this.modelForm = this.userForm;
    this.onValueChanged();
    this.subscribeToValueChanged();
  }
}
