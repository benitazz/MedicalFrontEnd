import { Directive, Attribute, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
  selector: '[validateEqual][formControlName],[validateEqual] formControl],[validateEqual][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EqualValidatorDirective,
    multi: true
  }]
})

export class EqualValidatorDirective implements Validator {
  @Input() public reverse;

  constructor(@Attribute('validateEqual') public validateEqual: string) {
  }

  public validate(c: AbstractControl): { [key: string]: any } {
    const v = c.value;
    const e = c.root.get(this.validateEqual);

    if (e && v !== e.value && !this.reverse) {
      return {
        validateEqual: false
      };
    }
    return null;
  }
}
