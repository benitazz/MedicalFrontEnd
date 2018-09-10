import { Component, OnDestroy, OnInit } from '@angular/core';

import { BannerMessage } from '../../../models';
import { BannerType } from '../../../enums';
import { BannerService } from '../../../services';

import { ConstantMessage } from '../../../common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'notification-banner',
  templateUrl: './notification-banner.component.html',
  styleUrls: ['./notification-banner.component.scss']
})
export class NotificationBannerComponent implements OnInit, OnDestroy {
  public alertClass = 'alert alert-dismissable fade in ';
  public alertMessage: string;

  public bannerMessage: BannerMessage;
  public bannerType = BannerType;
  public bannerTypeValue: BannerType;


  public notificationSubscription: Subscription;

  constructor(private _bannerService: BannerService) {
  }

  public ngOnInit(): void {
    this.notificationSubscription = this._bannerService.state.subscribe(message => {
      this.activate(message);
    });
  }

  public activate(details: BannerMessage): void {
    this.bannerMessage = details;
    this.getMessage();
    setTimeout(() => this.bannerMessage = null, this.bannerMessage && this.bannerMessage.timeout || 5000);
  }

  private getMessage(): void {
    switch (this.bannerMessage.type) {
      case BannerType.Success:
        this.alertClass = 'alert-success';
        this.alertMessage = this.bannerMessage.message || ConstantMessage.SUCCESS_MESSAGE;
        this.bannerTypeValue = BannerType.Success;
        break;
      case BannerType.Error:
        this.alertClass = 'alert-danger';
        this.alertMessage = this.bannerMessage.message || ConstantMessage.FAILED_MESSAGE;
        this.bannerTypeValue = BannerType.Error;
        break;
      case BannerType.Warning:
        this.alertClass = 'alert-warning';
        this.bannerTypeValue = BannerType.Warning;
        this.alertMessage = this.bannerMessage.message || ConstantMessage.FAILED_LOADING_CONTENT;
        break;
      default:
        break;
    }
  }

  public notificationClose(): void {
    this.bannerMessage = null;
  }

  public ngOnDestroy(): void {
    if (this.notificationSubscription) {
      this.notificationSubscription.unsubscribe();
    }
  }
}
