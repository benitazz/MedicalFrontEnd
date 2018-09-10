import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { ConstantRoutes } from '../../common';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public canActivate(): boolean {
    if (!this.authService.isLoggedIn) {
      this.router.navigate([`/${ConstantRoutes.LOGIN}`]);
      return false;
    }
    return true;
  }

 /* public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isLoggedIn
      .pipe(
        take(1),
        map((isLoggedIn: boolean) => {
          if (!isLoggedIn) {
            this.router.navigate([`/${ConstantRoutes.LOGIN}`]);
            return false;
          }
          return true;
        })
      );
  }*/
}
