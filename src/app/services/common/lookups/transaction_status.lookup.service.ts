import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Api } from '../../../common';
import { LookupService } from './lookup.service';

@Injectable({
    providedIn: 'root'
})
export class TransactionStatusLookupService extends LookupService {
     constructor(http: Http) {
        super(http, Api.TRANSACTION_STATUSES);
    }
}
