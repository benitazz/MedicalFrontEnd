import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';
import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ConstantRegex } from '../../common';

export function emailValidator(required: boolean): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (!required && !control.value) {
      return null;
    }

    const NAME_REGEXP: RegExp = RegExp(ConstantRegex.EMAIL_PATTERN);
    const results = NAME_REGEXP.test(control.value);

    return results ? null : { invalidEmail: true };
  };
}

@Directive({
  selector: '[emailValidator][formControlName], [emailValidator][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true
  }]
})
export class EmailValidatorDirective implements Validator, OnChanges {
  @Input() public required: boolean;
  private valFn;

  public ngOnChanges(changes: SimpleChanges): void {
    this.valFn = emailValidator(this.required);
  }

  public validate(control: AbstractControl): { [key: string]: any } {
    this.valFn = emailValidator(this.required);
    return this.valFn(control);
  }
}
