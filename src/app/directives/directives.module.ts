import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseDirective } from './collapse/collapse.directive';
import { CanAccessDirective } from './canAccess/can-access.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CanAccessDirective,
    CollapseDirective
  ],
  exports: [
    CanAccessDirective,
    CollapseDirective
  ]
})
export class DirectivesModule { }
