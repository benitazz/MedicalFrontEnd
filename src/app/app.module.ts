import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { UsersModule } from './components/users/users.module';
import { HttpModule } from '@angular/http';

import { DialogComponent, IsBusyComponent, AppErrorHandler } from './common';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ModalModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './/app-routing.module';

import { ApproveModule } from './components/file-management/approve/approve.module';
import { UploadModule } from './components/file-management/upload/upload.module';
import { NavigationPagesModule } from './components/navigation-pages/navigation-pages.module';

import { DirectivesModule } from './directives/directives.module';

import {
  AuthGuard, AuthService, BannerService,
  CanAccessService,
  UserService
} from './services';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    IsBusyComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    UsersModule,
    AppRoutingModule,
    ApproveModule,
    UploadModule,
    NavigationPagesModule,
    DirectivesModule,
    HttpModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    BannerService,
    CanAccessService,
    UserService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
