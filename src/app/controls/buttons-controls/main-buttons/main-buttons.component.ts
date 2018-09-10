import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EditMode } from '../../../enums';
import { ConstantUi } from '../../../common';

@Component({
  selector: 'main-buttons',
  templateUrl: './main-buttons.component.html',
  styleUrls: ['./main-buttons.component.scss']
})
export class MainButtonsComponent implements OnInit {
  // PROPERTIES
  @Input() public form: FormControl;
  @Input() public editMode: EditMode;
  @Input() public enablePrimary = true;
  @Input() public enableSecondary = true;
  @Input() public enableTertiary = true;
  @Input() public showPrimary = true;
  @Input() public showSecondary = false;
  @Input() public showTertiary = false;
  @Input() public showCancel = true;
  @Input() public secondaryText: string;
  @Input() public primaryText: string;
  @Input() public tertiaryText: string;

  @Output() public cancelEvent = new EventEmitter();
  @Output() public secondaryEvent = new EventEmitter();
  @Output() public primaryEvent = new EventEmitter();
  @Output() public tertiaryEvent = new EventEmitter();

  public buttonCancelText = ConstantUi.BUTTON_CANCEL;

  constructor() { }

  public ngOnInit(): void {
    if (!this.primaryText) {
      this.primaryText = this.editMode === EditMode.Add ? ConstantUi.BUTTON_ADD : ConstantUi.BUTTON_UPDATE;
    }

    if (!this.secondaryText) {
      this.secondaryText = ConstantUi.BUTTON_DELETE;

      if (this.editMode) {
        this.showSecondary = this.showSecondary && this.editMode === EditMode.Edit; // Does not make sense unless its a Delete button
      }
    }
  }

  public onCancel(): void {
    this.cancelEvent.emit();
  }

  public onTertiary(): void {
    this.tertiaryEvent.emit();
  }

  public onSecondary(): void {
    this.secondaryEvent.emit();
  }

  public onPrimary(): void {
    this.primaryEvent.emit();
  }
}
