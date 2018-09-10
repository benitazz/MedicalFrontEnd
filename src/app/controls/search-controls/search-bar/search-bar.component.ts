import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CustomDate, DateRange } from '../../../models';
import { environment } from '../../../../environments/environment';
import { IMyDrpOptions } from 'mydaterangepicker';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public dateRange: DateRange;

  @Input() public options: Array<any>;
  @Input() public placeholder: string;
  @Input() public selectText: string;
  @Input() public displayName: string;
  @Input() public valueName: string;

  @Output() public searchChanged = new EventEmitter<string>();
  @Output() public dateRangeChanged = new EventEmitter<DateRange>();
  @Output() public filterOptionChanged = new EventEmitter<object>();

  constructor() { }

  public ngOnInit(): void {
    this.dateRange = new DateRange();

    const currentDate = new Date();
    this.dateRange.endDate = new CustomDate(currentDate);

    currentDate.setDate(currentDate.getDate() - 30);
    this.dateRange.beginDate = new CustomDate(currentDate);
  }

  public onDateChaged(): void {
    this.dateRangeChanged.emit(this.dateRange);
  }

  public onSearchChanged($searchText: string): void {
    this.searchChanged.emit($searchText);
  }

  public onOptionSelected($selectedObject: object): void {
    this.filterOptionChanged.emit($selectedObject);
  }
}
