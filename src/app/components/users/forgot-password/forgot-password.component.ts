import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services';
import { Subscription } from 'rxjs';
import { ForgotPassword } from './../../../models';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {

  private resetPasswordSubscription: Subscription;

  constructor(private _authService: AuthService) { }

  public ngOnInit(): void {
  }

  public onSubmit($forgotPassword: ForgotPassword): void {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.resetPasswordSubscription = this._authService.forgotPassword($forgotPassword)
      .subscribe(() => {
        // tslint:disable-next-line:no-debugger
        debugger;
      }, (error) => {
        // tslint:disable-next-line:no-debugger
        debugger;
      });
  }

  public ngOnDestroy(): void {
    if (this.resetPasswordSubscription) {
      this.resetPasswordSubscription.unsubscribe();
    }
  }
}
