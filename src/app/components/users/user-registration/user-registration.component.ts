import { IsBusyService, NotFoundError, BadInput, ModelFormBase, IBuildForm } from './../../../common';
import { BannerService, AuthService } from './../../../services';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registration } from '../../../models';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent extends ModelFormBase implements OnInit, IBuildForm {
  @ViewChild('registrationForm') public registrationForm: NgForm;

  constructor(
    private _authService: AuthService,
    private _bannerService: BannerService,
    private _isBusy: IsBusyService) {
      super();
    }

  public ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void {
    this.modelForm = this.registrationForm;
    this.onValueChanged();
    this.subscribeToValueChanged();
  }

  public register($registration: Registration): void {
    // tslint:disable-next-line:no-debugger
    debugger;
    this._isBusy.show();
    this._authService.registration($registration).subscribe(data => {
      this._isBusy.hide();
      // this._router.navigate([`/uploads`]);
    }, (error) => {
      this._isBusy.hide();
      if (error instanceof NotFoundError) {
        this._bannerService.showError('The account does not exist, please create a new account.');
        return;
      }

      if (error instanceof BadInput) {
        this._bannerService.showError('The username is already taken');
        return;
      }

      throw error;
    });
  }
}
