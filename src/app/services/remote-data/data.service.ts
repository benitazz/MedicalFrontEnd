import { Headers, Http, Response } from '@angular/http';
import { ContentType } from '../../enums';
import { Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AppError, NotFoundError, Constants, BadInput, ForbiddenError, ConflictError } from '../../common';
import { UrlBuilderService } from './url-builder.service';
import { AuthToken } from '../../models';

export class DataService extends UrlBuilderService {

  constructor(private _http: Http, private _url: string) {
    super();
    this._url = this.buildUrl(`${this._url}`);
  }

  public delete(): Observable<any> {
    const that = this;
    const headers = this.getHeader(ContentType.Json);
    return that.getObservableJsonResponse(that._http.delete(this._url, { headers }));
  }

  public get(url?: string): Observable<any> {
    const that = this;
    url = this.getUrl(url);
    const headers = this.getHeader(ContentType.Json);
    return that.getObservableJsonResponse(that._http.get(url, { headers }));
  }

  public getFirst(): Observable<any> {
    return this.getAll().pipe(mergeMap(m => m));
  }

  public getAll(url?: string): Observable<any[]> {
    return this.get(url);
  }

  public patch(dataObject: any): Observable<any> {
    const that = this;
    const postData = JSON.stringify(dataObject);
    const headers = that.getHeader();
    return that.getObservableJsonResponse(that._http.patch(this._url, postData, { headers }));
  }

  public post(
    dataObject: any
    , url?: string
    , contentType: ContentType = ContentType.Json): Observable<any> {
    const that = this;
    const postData = JSON.stringify(dataObject);
    const headers = that.getPostHeader(contentType);
    url = that.getUrl(url);
    return that.getObservableJsonResponse(that._http.post(url, postData, { headers }));
  }

  public put(dataObject: any, url?: string): Observable<any> {
    const that = this;
    const putData = JSON.stringify(dataObject);
    const headers = that.getHeader();
    url = this.getUrl(url);
    return that.getObservableJsonResponse(that._http.put(url, putData, { headers }));
  }

  private getObservableJsonResponse(observableResponse: Observable<any>): Observable<any> {
    return observableResponse
      .pipe(
        map(res => {
          try {
            return res.json();
          } catch (error) {
            return res;
          }
        }),
        catchError(this.handleError)
      );
  }

  private getHeader(contentType: ContentType = ContentType.Json): Headers {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('accept', 'application/json');
    /*headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');*/

    const token = localStorage.getItem(Constants.TOKEN);

    if (token) {
      const tokenObject: AuthToken = JSON.parse(token);
      headers.append('Authorization', `bearer ${tokenObject.auth_token}`);
    }

    if (contentType === ContentType.Blob) {
      headers.append('ResponseType', 'arraybuffer');
    }

    return headers;
  }

  private getPostHeader(contentType: ContentType = ContentType.Json): Headers {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    switch (contentType) {
      case ContentType.Json:
        headers.append('Accept', 'application/json');
        break;

      case ContentType.Blob:
        headers.append('accept', '*/*');
        break;

      default:
        throw new Error('Unsupported content type.');
    }

    const token = localStorage.getItem(Constants.TOKEN);

    if (token && token !== 'undefined') {
      const tokenObject: AuthToken = JSON.parse(token);
      headers.append('Authorization', `bearer ${tokenObject.auth_token}`);
    }

    return headers;
  }

  private handleError(error: Response): Observable<any> {
    if (error.status === Constants.HTTP_NOT_FOUND) {
      return Observable.throw(new NotFoundError(error));
    }

    if (error.status === Constants.HTTP_BAD_REQUEST) {
      return Observable.throw(new BadInput(error.json()));
    }

    if (error.status === Constants.HTTP_FORBIDDEN) {
      return Observable.throw(new ForbiddenError(error.json()));
    }

    if (error.status === Constants.HTTP_CONFLICT) {
      return Observable.throw(new ConflictError(error.json()));
    }

    return Observable.throw(new AppError(error));
  }

  private getUrl(url?: string): string {
    return url ? url : this._url;
  }
}

