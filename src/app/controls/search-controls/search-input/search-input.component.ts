import 'rxjs/add/operator/distinctUntilChanged';

import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Constants } from '../../../common';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, mergeMap, retryWhen } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

const noop = () => { };

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SearchInputComponent),
  multi: true
};

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  // providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class SearchInputComponent implements OnInit {
  @Input() public disabled: boolean;
  @Input() public placeholder: string;
  @Input() public searchText: string;
  @Output() public searchInputChanged: EventEmitter<any> = new EventEmitter();

  @ViewChild('searchInputField') public searchInput: ElementRef;

  // placeholders for the callbacks.
  /*private _onTouchedCallback: () => void = noop;
  private _onChangeCallback: (_: any) => void = noop;
  private _innerValue: string = String.Empty;*/

  /** Class Constructor */
  constructor() { }

  /** Initialize Class Members
   * hook up the keyup event on the serach input and only emit the search text if it changed and is more or egual to 3 characters.
   * Wait at least 400 milliseconds before emitting the search text so we do not flood the server with many calls.
   */
  public ngOnInit(): void {
    const keyups = fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map(e => {
          let inputEvent: any;
          inputEvent = e;
          return inputEvent.target.value;
        }),
        debounceTime(environment.debouncer_time),
        distinctUntilChanged()
      );

    // emit the search text if the above criteria is met.
    keyups.subscribe(searchData => {
      this.searchInputChanged.emit(searchData);
    });
  }

  /** Set the binding value to the input control. */
  /*set innerValue(val: any) {
    this._innerValue = val;
    this._onChangeCallback(val);
  }*/

  /** Get the binding value of the input control */
  /*get innerValue(): any {
    return this._innerValue;
  }*/

  // public onTouched = () => { };

  /** Set the received value to the innerValue. */
  /*public writeValue(val: any) {
    if (val !== undefined) {
      this.innerValue = val;
    }
  }*/

  /** Hook up the on change event method */
  /*public registerOnChange(fn: any): void {
    this._onChangeCallback = fn;

    // this.onChange.subscribe(fn);
  }*/

  /** Register the on Touched Event */
  /*public registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
  }*/
}
