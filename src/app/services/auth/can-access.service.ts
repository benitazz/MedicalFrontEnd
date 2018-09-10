import { UserRoles } from '../../common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUser } from '../../common/helpers/token-decoder.helper';
import { User } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class CanAccessService {

  private userRoles: Set<string>;
  private currentUser: User;

  constructor() {

  }

  public checkAuthorization(path: any): Observable<boolean> {
    return Observable.of(this.doCheckAuthorization(path));
  }

  private doCheckAuthorization(path: string[]): boolean {
    this.currentUser = CurrentUser();
    this.userRoles = new Set([this.currentUser.roleName]);
    if (path.length) {
      const entry = this.findEntry(UserRoles, path);
      if (entry && entry['permittedRoles']
        && this.userRoles.size) {
        return entry.permittedRoles
          .some(permittedRole => this.userRoles.has(permittedRole));
      }
      return false;
    }
    return false;
  }

  /**
 * Recursively find workflow-map entry based on the path strings
 */
  private findEntry(currentObject: any, keys: string[], index = 0): any {
    const key = keys[index];
    if (currentObject[key] && key === this.currentUser.roleName) {
      return currentObject[key];
    }

    if (currentObject[key] && index < keys.length - 1) {
      return this.findEntry(currentObject, keys, index + 1);
    } else if (currentObject[key] && index === keys.length - 1) {
      return currentObject[key];
    } else {
      return false;
    }
  }
}
