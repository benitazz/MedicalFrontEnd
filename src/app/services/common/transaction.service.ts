import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../remote-data/data.service';
import { Api } from '../../common';
import { FileTransaction } from '../../models';
import { nameof } from 'ts-simple-nameof';

@Injectable({
    providedIn: 'root'
})
export class TransactionService extends DataService {
    constructor(http: Http) {
        super(http, Api.FILE_TRANSACTIONS);
    }

    public getFileTransactionsByFileId(fileId: string): Observable<Array<FileTransaction>> {
        const fileIdName = nameof<FileTransaction>(ft => ft.fileId);
        const equal = this.equals(fileIdName, fileId, false);
        const filter = this.filter(equal);
        const url = this.buildUrl(`${Api.FILE_TRANSACTIONS}?${filter}`);
        return this.getAll(url);
    }

    public GetTransactionSummary(fileId: string): Observable<any> {
        const url = this.buildUrl(`${Api.FILE_UPLOAD}/${fileId}${Api.FUNCTIONS_TRANSACTION_SUMMARY}`);
        return this.getAll(url);
    }

    public getFileTransaction(transactionId: string): Observable<Array<FileTransaction>> {
        const url = this.buildUrl(`${Api.FILE_TRANSACTIONS}/'${transactionId}'`);
        return this.getAll(url);
    }
}
