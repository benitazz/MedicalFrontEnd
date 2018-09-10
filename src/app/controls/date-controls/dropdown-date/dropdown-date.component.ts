import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'dropdown-date',
  templateUrl: './dropdown-date.component.html',
  styles: [
    `
    .btn {
      padding: 0px 4px;
    }

    .material-calendar:before {
      font-size: 20px !important;
    }

    .btn-default,
    .btn-default:hover,
    .btn-default:active,
    .btn-default:visited,
    .btn-default:focus {
      background-color: #ffffff;
      border: 1px solid #ccc;
      box-shadow: none;
    }

    button {
      height: 38px;
    }

    busy-select {
      width:100%;
    }

    .calender {
     width: 39.8594px;
     border-radius: 0px !important;
    }


    .input-group>busy-select {
      flex: 1 1 auto;
      position: relative;
      width: 1%;
    }

    :host /deep/ .ngxmdp {
        position: unset;
      }

    :host /deep/ .ngxmdp .selectorarrow {
       margin-top: 45px;
    }

    :host /deep/ div.selector.selectorarrow.selectorarrowleft {
      left: auto !important;
      right: 0px;
    }

    :host /deep/ .ngxmdp .selectorarrowleft:after, .ngxmdp .selectorarrowleft:before, div.selector.selectorarrow.selectorarrowleft::before{
      left: auto !important;
      right: 4px;
    }

    :host /deep/ div.selector.selectorarrow.selectorarrowleft::before{
      left: auto !important;
      right: 4px;
    }

    :host /deep/ ul.dropdown-menu{
      left: 0px !important;
      width: calc(100%) !important;
    }
   ` ]
})
export class DropdownDateComponent implements OnInit {
  @Input('disabled') public disabled: boolean;
  // @Output() public dateChangedEvent = new EventEmitter<DateRange>();

  public options: Array<any>;
  public isDateSelectionHidden: boolean;
  public calendarOptions: INgxMyDpOptions;
  public selectedDateText: string;
  public dateValue: any;

  private originalLength: number;

  constructor() { }

  public ngOnInit(): void {
    this.calendarOptions = {
      // other options...
      dateFormat: environment.date_format.toLowerCase()
    };
  }

  public onDaysSelectionChanged($selectedOption: any): void {
  }

  public onDateCalenderChange(): void {
  }
}
