import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResetPassword } from '../../../models';
import { AuthService } from '../../../services';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  private resetPasswordSubscription: Subscription;
  private _code: string;

  constructor(private _authService: AuthService, private _route: ActivatedRoute) { }

  public ngOnInit(): void {
    // tslint:disable-next-line:no-debugger
    debugger;
    this._code =
      this._route.snapshot.paramMap.get(`${nameof<ResetPassword>(routeParam => routeParam.code)}`);
  }

  public resetPassword($resetPassword: ResetPassword): void {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.resetPasswordSubscription =
      this._authService.resetPassword($resetPassword)
        .subscribe(() => { },
          (error) => {
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
