import { Http } from '@angular/http';

import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { DataService } from '../remote-data/data.service';
import { environment } from '../../../environments/environment';
import '../../common/extensions/string.extensions';

@Injectable({
  providedIn: 'root'
})
export class InfiniteScrollService extends DataService implements OnDestroy {

  private moreDataSubject = new Subject<Array<any>>();
  private _isAllData: boolean;
  private _isBusyLoading: boolean;
  private moreDataSubscription: Subscription;

  private _moreData = this.moreDataSubject.asObservable();

  constructor(http: Http) {
    super(http, String.Empty);
  }

  public get LAZY_LOAD_CAPACITY(): number {
    return environment.lazy_load_capacity;
  }

  public getMoreData(url: string, currentLength: number, addSkip?: boolean, fnMap?: (res: any) => any[]): void {
    const that = this;
    that._isBusyLoading = false;
    fnMap = fnMap ? fnMap : (res) => res.value;

    if (currentLength === 0) {
      return;
    }

    if (!url) {
      throw new Error('The url is required to perform the infinite scroll');
    }

    if (currentLength <= 0) {
      throw new Error('Current length cannot be less than or equal to zero to perform the infinite scroll');
    }

    const isAllDataRetrieved = (currentLength % this.LAZY_LOAD_CAPACITY) !== 0;

    if ((currentLength !== 0 && currentLength < this.LAZY_LOAD_CAPACITY) || that.isAllData || isAllDataRetrieved) {
      return;
    }

    if (addSkip) {
      url = this.getSkipUrl(url, currentLength);
    }

    const results = that
      .get(url)
      .pipe(
        map(res => fnMap(res)),
        catchError(exception => {
          that._isBusyLoading = false;
          throw new Error(exception);
        })
      );

    that._isBusyLoading = true;

    if (results) {
      that.moreDataSubscription = results.subscribe(data => {
        const retrievedData: any = data;
        if (retrievedData) {
          that._isAllData = retrievedData.length < this.LAZY_LOAD_CAPACITY;
        }
        if (retrievedData && retrievedData.length > 0) {
          console.log('More Data');
        }
        that.moreDataSubject.next(retrievedData);
      },
        (error) => {
          that.moreDataSubject.next();
          that._isBusyLoading = false;
          console.log(error);
          throw new Error(error);
        });
    }
  }

  public mapResultToValue = (data) => {
    return data.value;
  }

  get isAllData(): boolean {
    return this._isAllData;
  }

  get isBusyLoading(): boolean {
    return this._isBusyLoading;
  }

  get moreData(): Observable<any> {
    return this._moreData;
  }

  public ngOnDestroy(): void {
    if (this.moreDataSubscription) {
      this.moreDataSubscription.unsubscribe();
    }

    if (this.moreDataSubject) {
      this.moreDataSubject.unsubscribe();
    }
  }

  public reset(): void {
    this._isAllData = false;
    this._isBusyLoading = false;
  }
}
