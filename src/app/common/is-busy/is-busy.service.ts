import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsBusyService implements OnDestroy {

  private showSubject = new Subject();
  private hideSubject = new Subject();

  public isShowing = false;
  public showObservable = this.showSubject.asObservable();
  public hideObervable = this.hideSubject.asObservable();

  constructor() {
  }

  public show(): void {
    if (!this.isShowing) {
      this.isShowing = true;
      this.showSubject.next();
    }
  }

  public hide(): void {
    if (this.isShowing) {
      this.isShowing = false;
      this.hideSubject.next();
    }
  }

  public ngOnDestroy(): void {
    if (this.showSubject) {
      this.showSubject.next();
      this.showSubject.complete();
    }

    if (this.hideSubject) {
      this.hideSubject.next();
      this.hideSubject.complete();
    }
  }
}
