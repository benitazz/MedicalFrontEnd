import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidatorDirective } from './email-validation/email-validator.directive';
import { EqualValidatorDirective } from './equal-validation/equal-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EmailValidatorDirective,
    EqualValidatorDirective
  ],
  exports: [
    EmailValidatorDirective,
    EqualValidatorDirective
  ]
})
export class CustomValidationsModule { }
