import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    NotFoundComponent
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    NotFoundComponent
  ]
})
export class NavigationPagesModule { }
