import { DialogType } from '../../enums';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface IConfirmationMessage {
  title: string;
  message: string;
  type: DialogType;
}

@Injectable()
export class DialogService {

  private confirmationSubject = new Subject<IConfirmationMessage>();
  private saveSubject = new Subject();
  private cancelSubject = new Subject();

  public confirmationDialogState = this.confirmationSubject.asObservable();
  public confirmationSaveState = this.saveSubject.asObservable();
  public confirmationCancelState = this.cancelSubject.asObservable();

  /** class constructor. */
  constructor() { }

  /** Activate the confirmation dialog. */
  public activate(type: DialogType, message?: string, title?: string): void {
    this.confirmationSubject.next(<IConfirmationMessage>{ type: type, message: message, title: title });
  }

  /** trigger on save
   * The client that subscribed to the confirmationSaveState will be notified.
   */
  public onSave(): void {
    this.saveSubject.next();
  }

  /** trigger on cancel dialog
   * The client that subscribed to the confirmationCancelState will be notified.
   */
  public onCancel(): void {
    this.cancelSubject.next();
  }
}
