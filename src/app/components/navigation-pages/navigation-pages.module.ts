import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactUsComponent
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ContactUsComponent
  ]
})
export class NavigationPagesModule { }
