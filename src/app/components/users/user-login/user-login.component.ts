import { UserLogin } from './../../../models/users/user-login';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  public invalidLogin: boolean;

  constructor(private _authService: AuthService) { }

  public ngOnInit(): void {

  }

  public signIn($credentials: UserLogin): void {
    this._authService.login($credentials).subscribe(data => {

    }, (error) => {
      // tslint:disable-next-line:no-debugger
      debugger;

    });

  }

}
