import { HomeComponent } from './components/navigation-pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services';
import { UserRoles } from './common';
import { ApproveListComponent } from './components/file-management/approve/approve-list/approve-list.component';
import { ApproveDetailsComponent } from './components/file-management/approve/approve-details/approve-details.component';

const routes: Routes = [
  /*{
    path: 'advancedSearch',
    component: AdvancedSearchComponent,
    canActivate: [AuthGuard],
    data: UserRoles.admin
  },*/
 /* {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: UserRoles.admin
  },*///
  {
    path: 'approver',
    component: ApproveListComponent,
    canActivate: [AuthGuard],
    data: UserRoles.approver
  },
  {
    path: 'approverDetails/:id',
    component: ApproveDetailsComponent,
    canActivate: [AuthGuard],
    data: UserRoles.approver
  },
  {
    path: 'users',
    loadChildren: './components/users/users.module#UsersModule'
  },
  {
    path: 'uploads',
    loadChildren: './components/file-management/upload/upload.module#UploadModule'
  },
  {
    path: 'home',
    component: HomeComponent
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
