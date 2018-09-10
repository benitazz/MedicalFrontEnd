import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { IMyDrpOptions } from 'mydaterangepicker';
import { environment } from '../../../../environments/environment';
import { DateRange } from '../../../models';

const noop = () => { };
const DATE_RANGE_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateRangePickerComponent),
  multi: true
};

@Component({
  selector: 'date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss'],
  providers: [DATE_RANGE_CONTROL_VALUE_ACCESSOR]
})
export class DateRangePickerComponent implements OnInit, ControlValueAccessor {
  private _innerValue: DateRange;
  private _onTouchedCallback: () => void = noop;
  private _onChangeCallback: (_: any) => void = noop;

  @Output() public change = new EventEmitter<DateRange>();

  public myDateRangePickerOptions: IMyDrpOptions = {
    // other options...
    dateFormat: environment.date_format.toLowerCase()
  };

  set innerValue(val: DateRange) {
    const orginalValue = this._innerValue;

    this._innerValue = val;
    if (val) {
      this._innerValue = val;
    }

    this._onChangeCallback(this.innerValue);

    if ((orginalValue || this._innerValue) && orginalValue !== this._innerValue) {
      this.onChange();
    }
  }

  get innerValue(): DateRange {
    return this._innerValue;
  }

  constructor() { }

  public ngOnInit(): void {
  }

  public writeValue(obj: DateRange): void {
    if (obj !== undefined) {
      this.innerValue = obj;
    }
  }

  public registerOnChange(fn: any): void {
    this._onChangeCallback = fn;
  }

  public registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  public onChange(): void {
    this.change.emit(this._innerValue);
  }
}
