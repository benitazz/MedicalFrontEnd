import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { Subscription } from 'rxjs/Subscription';

import { DialogType } from '../../enums';
import { ConstantUi } from '../constants/constant.user-interface';
import { DialogService } from './dialog.service';

@Component({
  selector: 'dialog-modal',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements AfterViewInit, OnDestroy {

  public confirmationDialogSubscription: Subscription;
  public confirmationMessage = { type: DialogType.Information, message: String.Empty, title: String.Empty };
  public buttonYesText = ConstantUi.BUTTON_YES;
  public buttonNoText = ConstantUi.BUTTON_NO;
  public buttonDismissText = ConstantUi.BUTTON_DISMISS;
  public buttonOKText = ConstantUi.BUTTON_OK;
  public buttonCloseText = ConstantUi.BUTTON_CLOSE;

  @ViewChild('confirmationModal') public confirmationModal: ModalDirective;

  /** class constructor. */
  constructor(private _dialogService: DialogService) {
    this._dialogService.confirmationDialogState.subscribe((confirmationMessage) => {
      this.activate(confirmationMessage);
    });
  }

  /** Ininitialize member variable in this method. */
  public ngAfterViewInit(): void { }

  /** Show the Dialog Modal */
  public activate(confirmationMessage: any): void {
    if (this.confirmationModal && confirmationMessage) {
      this.confirmationMessage = confirmationMessage;
      this.confirmationModal.show();
    }
  }

  /** Hide the Dialog Modal. */
  public hide(triggerHideEvent = false): void {
    if (this.confirmationModal) {
      this.confirmationModal.hide();
      if (triggerHideEvent) {
        this._dialogService.onCancel();
      }
    }
  }

  /**  Trigger the save event. */
  public save(): void {
    this.hide();
    this._dialogService.onSave();
  }

  /** clean the disposable objects. */
  public ngOnDestroy(): void {
    if (this.confirmationDialogSubscription) {
      this.confirmationDialogSubscription.unsubscribe();
    }
  }
}
