import { NgForm } from '@angular/forms';
import { FormBase } from './form-base';

export abstract class ModelFormBase extends FormBase {
    public formErrors: any = {};
    public validationMessages: any = {};
    public modelForm: NgForm;

    public onValueChanged(data?: any): void {

        if (this.modelForm) {
            this.onValueChangedBase(this.modelForm.form, data);
        }
    }

    public onStatusChanged(): void {
        this.onValueChanged();
    }

    public subscribeToValueChanged(): void {
        if (this.modelForm) {
            this.modelForm.valueChanges.subscribe(data => this.onValueChanged(data));
            this.modelForm.statusChanges.subscribe(_ => this.onStatusChanged());
        } else {
            console.warn('ModelForm is Undefined on Subscription');
        }
    }

    public markFormDirty(): void {
        const form = this.modelForm.form;
        form.markAsDirty();
    }
}
