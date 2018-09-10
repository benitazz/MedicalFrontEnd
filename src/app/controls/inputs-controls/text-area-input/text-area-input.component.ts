import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };

const TEXT_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextAreaInputComponent),
  multi: true
};
@Component({
  selector: 'text-area-input',
  templateUrl: './text-area-input.component.html',
  styleUrls: ['./text-area-input.component.scss'],
  providers: [TEXT_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class TextAreaInputComponent implements ControlValueAccessor {
  @Input() public maxlength: number;
  @Input() public minlength: number;
  @Input() public displaytop: Boolean = false;
  @Input() public disabled: Boolean = false;

  private _innerValue: string;
  private _onTouchedCallback: () => void = noop;
  private _onChangeCallback: (_: any) => void = noop;

  public set innerValue(val: string) {
    this._innerValue = val;
    this._onChangeCallback(this.innerValue);
  }

  public get innerValue(): string {
    return this._innerValue;
  }

  public get innerValueLength(): number {
    const emptyTextLength = 0;
    return this.innerValue ? this.innerValue.length : emptyTextLength;
  }

  public onTouched = () => {
    this._onTouchedCallback();
  }

  public writeValue(value: string): void {
    if (value !== undefined) {
      this.innerValue = value;
    }
  }

  public registerOnChange(fn: any): void {
    this._onChangeCallback = fn;
  }

  public registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
  }
}
