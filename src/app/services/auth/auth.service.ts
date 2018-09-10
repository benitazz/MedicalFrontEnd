import { isTokenExpired } from './../../common/helpers/token-decoder.helper';
import { Http } from '@angular/http';
import { Constants } from '../../common/constants/constant';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLogin } from '../../models';
import { Api, ConstantRoutes } from '../../common';
import { CurrentUser } from '../../common/helpers/token-decoder.helper';
import { DataService } from '../remote-data/data.service';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

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
         // const userDetails = CurrentUser(data.token);

          const dataObject = JSON.parse(data);
          const token = dataObject.auth_token;
          const userDetails = CurrentUser(token);
          localStorage.setItem(Constants.TOKEN, token);


          /*if (userDetails.email !== '') {
            return userDetails;
          }

          return userDetails;*/

          return 'test';
        })
      );
  }

  public logout(): void {
    localStorage.removeItem(Constants.TOKEN);
    this._router.navigate([`/${ConstantRoutes.LOGIN}`]);
  }
}
