import { Component, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalDirective } from 'ngx-bootstrap';
import { IsBusyService } from './is-busy.service';

@Component({
  selector: 'is-busy-modal',
  templateUrl: './is-busy.component.html',
  styleUrls: [
    '../../../styles/style-data-loader.scss',
    './is-busy.component.scss'
  ]
})
export class IsBusyComponent implements OnDestroy, OnInit {
  private isBusySubscription: Subscription;
  private hideSubscription: Subscription;
  public isLoading: boolean;
  @ViewChild('busyModal') public busyModal: ModalDirective;

  /** class constructor. */
  constructor(private _isBusyService: IsBusyService) {

  }

  public ngOnInit(): void {
    this.isBusySubscription = this._isBusyService.showObservable.subscribe(() => {
      this.showIsBusy();
      this.isLoading = true;
    });

    this.hideSubscription = this._isBusyService.hideObervable.subscribe(() => {
      this.hideIsBusy();
      this.isLoading = false;
    });
  }

  public showIsBusy(): void {
     this.busyModal.show();
  }

  public hideIsBusy(): void {
    this.busyModal.hide();
  }

  /** clean the disposable objects. */
  public ngOnDestroy(): void {
    if (this.isBusySubscription) {
      this.isBusySubscription.unsubscribe();
    }

    if (this.hideSubscription) {
      this.hideSubscription.unsubscribe();
    }
  }

}
