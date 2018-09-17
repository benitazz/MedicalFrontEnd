import { Http } from '@angular/http';
import { Constants } from '../../common/constants/constant';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLogin, ResetPassword, ForgotPassword, User } from '../../models';
import { Api, ConstantRoutes } from '../../common';
// import { CurrentUser } from '../../common/helpers/token-decoder.helper';
import { isTokenExpired, CurrentUser } from './../../common/helpers/token-decoder.helper';
import { DataService } from '../remote-data/data.service';
import { map, flatMap, switchMap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthService extends DataService {
  get isLoggedIn(): boolean {
    return !isTokenExpired();
    /*const token = localStorage.getItem(Constants.TOKEN);
    return !this.jwtHelper.isTokenExpired(token);*/
  }

  constructor(
    private _router: Router,
    public http: Http
  ) {
    super(http, Api.USER_LOGIN);
  }

  public login(user: UserLogin): Observable<any> {
    return this.post(user)
      .pipe(
        map(data => {
          const dataObject = JSON.parse(data);
          const token = dataObject.auth_token;
          // const userDetails = CurrentUser(token);
          localStorage.setItem(Constants.TOKEN, token);
          const decoded = jwt_decode(token);

          return decoded.id;
        }),
        switchMap(id => this.get(this.buildUrl(`${Api.USER_INFO}?userId=${id}`))),
        map((userdata: User) => {
          localStorage.setItem(Constants.CURRENT_USER, JSON.stringify(userdata));
          return userdata;
        })
      );
  }

  public forgotPassword(forgotPassword: ForgotPassword): Observable<any> {
    const url = this.buildUrl(Api.USER_FORGOT_PASSWORD);
    return this.post(forgotPassword, url, false);
  }

  public resetPassword(resetPassword: ResetPassword): Observable<any> {
    const url = this.buildUrl(Api.USER_REST_PASSWORD);
    return this.post(resetPassword, url, false);
  }

  public logout(): void {
    localStorage.removeItem(Constants.TOKEN);
    localStorage.removeItem(Constants.CURRENT_USER);
    this._router.navigate([`/${ConstantRoutes.LOGIN}`]);
  }
}
