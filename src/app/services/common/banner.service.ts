import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { BannerType } from '../../enums';
import { BannerMessage } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private _subject = new Subject<BannerMessage>();

  public state = this._subject.asObservable();

  constructor() { }

  public getSuccessMessage(): BannerMessage {
    return <BannerMessage>{ type: BannerType.Success };
  }

  public showBanner(message: BannerMessage): void {
    this._subject.next(message);
  }

  public showError(message?: string): void {
    this.showBanner(<BannerMessage>{ type: BannerType.Error, message: message });
  }

  public showErrorMessage(message: string): void {
    this.showBanner(<BannerMessage>{ type: BannerType.Error, message: message });
  }

  public showSuccess(message?: string): void {
    this.showBanner(<BannerMessage>{ type: BannerType.Success, message: message });
  }

  public showWarning(message?: string): void {
    this.showBanner(<BannerMessage>{ type: BannerType.Warning, message: message });
  }
}
