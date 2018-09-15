import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-no-result',
  templateUrl: './no-result.component.html',
  styleUrls: ['./no-result.component.scss']
})
export class NoResultComponent implements OnInit, OnChanges {
  @Input() public noResultText = 'No Results Found '; //  ConstantMessage.TEXT_NO_RESULTS;
  @Input() public currentList: Array<any>;
  @Input() public isBusy: boolean;

  public showMessage: boolean;

  constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this._changeDetectorRef.markForCheck();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentList'] || changes['isBusy']) {
      this.showMessage = this.currentList && this.currentList.length === 0; // && !(this._isBusy.isShowing || this.isBusy);
    }
  }
}

