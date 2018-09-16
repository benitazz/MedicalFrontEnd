import { UserRolesNames } from './../../../common/constants/constant.user-roles';
import { CurrentUser } from '../../../common/helpers/token-decoder.helper';
import { Component, OnInit, Input } from '@angular/core';
import { User, Role } from '../../../models';

@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.scss']
})
export class AdminItemComponent implements OnInit {
  @Input() public user: User;
  @Input() public index: number;
  @Input() public roles: Array<Role>;

  public selectRole: Role;

  constructor() { }

  public ngOnInit(): void {

  }

  public isRoleChecked($role: Role): boolean {
    return false;
    // return this.user.roleId === $role.roleId;
  }

  public canEditRole($role: Role): boolean {
    const currentUser = CurrentUser();
    if (currentUser &&
      (currentUser.roleName.toLowerCase() === UserRolesNames.SUPERADMIN.toLowerCase())
    ) {
      return $role.roleName.toLowerCase() !== UserRolesNames.ADMIN.toLowerCase();
    }

    return $role.roleName.toLowerCase() !== UserRolesNames.APPROVER.toLowerCase()
      || $role.roleName.toLowerCase() !== UserRolesNames.UPLOADER.toLowerCase();
  }

  public updateSelection($selectedRole: Role): void {
    this.deselectAll();
   // this.user.roleId = $selectedRole.roleId;
  }

  private deselectAll(): void {
    const arr = this.roles;
    arr.forEach(val => {
      if (val.selected) {
        val.selected = false;
      }
    });

    this.roles = arr;
  }
}
