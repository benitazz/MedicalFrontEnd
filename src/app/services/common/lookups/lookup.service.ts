import { map } from 'rxjs/operators';
import { Http } from '@angular/http';

import { DataService } from '../../remote-data/data.service';
import { Observable } from 'rxjs';
import { Lookup } from '../../../models';

export class LookupService extends DataService {
    private _lookupData: Array<Lookup>;

    constructor(http: Http, url: string) {
        super(http, url);
    }

    public getAll(): Observable<Array<Lookup>> {
        if (this._lookupData && this._lookupData.length > 0) {
            return Observable.of(this._lookupData);
        }

        return super.getAll().pipe(
            map(data => {
                this._lookupData = data;
                return data;
            })
        );
    }
}
