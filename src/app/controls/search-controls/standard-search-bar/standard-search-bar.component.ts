import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'standard-search-bar',
  templateUrl: './standard-search-bar.component.html',
  styleUrls: ['./standard-search-bar.component.scss']
})
export class StandardSearchBarComponent implements OnInit {
  @Input() public placeholder: string;
  @Input() public searchChanged = new EventEmitter<string>();
  @Input() public selectText: string;
  @Input() public displayName: string;
  @Input() public valueName: string;
  @Input() public options: Array<any>;

  @Output() public filterOptionChanged = new EventEmitter<object>();

  constructor() { }

  public ngOnInit(): void {
  }

  public onSearchChanged($searchText: string): void {
    this.searchChanged.emit($searchText);
  }

  public onOptionSelected($selectedObject: object): void {
    this.filterOptionChanged.emit($selectedObject);
  }
}
