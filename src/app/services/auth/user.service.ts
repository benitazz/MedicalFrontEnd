import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from '../../models';
import { Api } from '../../common';
import { Observable } from 'rxjs';
import { DataService } from '../remote-data/data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends DataService {

  constructor(http: Http ) {
    super(http, Api.USER_REGISTRATION);
   }

  public assignRole(userRegistration: User): Observable<any> {
    const url = this.buildUrl(`${Api.USER_ROLE}`);
    return this.post(userRegistration, url);
  }
}
