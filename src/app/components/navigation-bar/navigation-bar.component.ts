import { Component, OnInit } from '@angular/core';
import { User } from '../../models';
import { AuthService } from './../../services';
import { CurrentUser } from '../../common/helpers/token-decoder.helper';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  public user: User = CurrentUser();

  constructor(public authService: AuthService) { }

  public ngOnInit(): void {

  }

}
