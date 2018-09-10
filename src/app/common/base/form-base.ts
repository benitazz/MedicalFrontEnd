import { FormGroup } from '@angular/forms';
import { ComponentBase } from './component.base';

export abstract class FormBase extends ComponentBase {
    public formErrors: any = {};
    public formBusy: any = {};
    public validationMessages: any = {};

    protected onValueChangedBase(form: FormGroup, data?: any): void {
        if (!form) {
            return;
        }

        if (this.formErrors) {
            if (Object.keys(this.formErrors).length === 0) {
                console.warn('No FormErrors specified for form');
                return;
            }
            for (const field of Object.keys(this.formErrors)) {
                this.formErrors[field] = '';
                const control = form.get(field);
                // this.formBusy[field] = control && control.status === Constants.PENDING_STATUS;

                if (control && control.dirty && !control.valid) {
                    const messages = this.validationMessages[field];

                    for (const key of Object.keys(control.errors)) {
                        this.formErrors[field] += messages[key] + ' ';
                    }
                }
            }
        }
    }

}
