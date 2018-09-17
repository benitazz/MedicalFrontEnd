import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { UsersModule } from './components/users/users.module';
import { HttpModule } from '@angular/http';

import { DialogComponent, IsBusyComponent, AppErrorHandler } from './common';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ModalModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './/app-routing.module';
import { FooterComponent } from './components/footer/footer.component';

import { ApproveModule } from './components/file-management/approve/approve.module';
import { ControlsModule } from './controls/controls.module';
import { NavigationPagesModule } from './components/navigation-pages/navigation-pages.module';

import { DirectivesModule } from './directives/directives.module';

import {
  AuthGuard, AuthService, BannerService,
  CanAccessService,
  UserService
} from './services';

import { DialogService, IsBusyService } from './common';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    IsBusyComponent,
    NavigationBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    UsersModule,
    AppRoutingModule,
    ApproveModule,
    ControlsModule,
    NavigationPagesModule,
    DirectivesModule,
    HttpModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    BannerService,
    CanAccessService,
    DialogService,
    IsBusyService,
    UserService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
