import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { LoaderType } from '../../../enums';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'busy-select',
  templateUrl: './busy-select.component.html',
  styleUrls: ['./busy-select.component.scss']
})
export class BusySelectComponent implements OnInit, OnChanges {

  @Output() public optionSelected = new EventEmitter<any>();
  @Input() public selectText: string;
  @Input() public noItemsText: string;
  @Input() public noItems: boolean;
  @Input() public selectId: string;
  @Input() public displayName: string;
  @Input() public valueName: string;
  @Input() public selectOptions: Array<any>;
  @Input() public disabled: boolean;

  public loaderType = LoaderType.SoundWave;
  public loadingText = 'Loading...';

  public get isOptionsPopulated(): boolean {
    return this.selectOptions && this.selectOptions.length > 0;
  }

  public constructor() {
  }

  public ngOnInit(): void {
    if (!this.displayName) {
      this.displayName = 'name';
    }

    if (!this.valueName) {
      this.valueName = 'value';
    }

    this.selectOptions = [{ name: 'test1', value: 1 }, { name: 'test2', value: 2 }];
  }

  private optionChanged(option: any): void {
    this.selectText = option[this.displayName];
    this.optionSelected.emit(option);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectOptions'] || changes['selectId']) {
      if (this.selectOptions && this.selectOptions.length > 0 && this.selectId) {
        this.setSelectedItem();
      }
    }
  }

  private setSelectedItem(): void {
    const item = this.selectOptions.find(x => x[this.valueName] === this.selectId);
    if (item) {
      this.selectText = item[this.displayName];
    }
  }
}
