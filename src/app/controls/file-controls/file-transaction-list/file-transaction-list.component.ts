import { Component, OnInit, Input } from '@angular/core';
import { FileTransaction, Lookup } from '../../../models';
import { TransactionService, TransactionStatusLookupService } from '../../../services';
import { ComponentBase, ConstantMessage } from '../../../common';

import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'transaction-list',
  templateUrl: './file-transaction-list.component.html',
  styleUrls: ['./file-transaction-list.component.scss']
})
export class FileTransactionListComponent extends ComponentBase implements OnInit {
  @Input() public set fileId(id: string) {
    if (id) {
      this.setTransactionData(id);
    }
  }

  public fileTransactions: Array<FileTransaction>;
  public transactionStatuses: Array<Lookup>;
  public placeholder: string;
  public selectText: string;
  public totalAmount: number;

  public get canView(): boolean {
    return this.fileTransactions && this.fileTransactions.length > 0;
  }

  constructor(
    private _transactionService: TransactionService,
    private _transactionStatusService: TransactionStatusLookupService) {
    super();
  }

  public ngOnInit(): void {
    this.isLoading = true;
    this.placeholder = ConstantMessage.SEARCH_USER_PLACEHOLDER;
    this.selectText = ConstantMessage.SELECT_ALL;
  }

  public getTransactionStatus(fileTransaction: FileTransaction): Lookup {
    return this.transactionStatuses.find(status => status.id === fileTransaction.fileTransactionStatusId);
  }

  private setTransactionData(fileId: string): void {
    this.isLoading = true;
    forkJoin(this._transactionService.getFileTransactionsByFileId(fileId),
      this._transactionService.GetTransactionSummary(fileId),
      this._transactionStatusService.getAll())
      .pipe(
        map(joined => new Object({ transactions: joined[0], summaryData: joined[1], transactionStatuses: joined[2] }))
      )
      .subscribe((transactionData: any) => {
        this.fileTransactions = transactionData.transactions;
        this.totalAmount = transactionData.summaryData ? transactionData.summaryData.fileSumTotal : 0;
        this.transactionStatuses = transactionData.transactionStatuses;
        this.isLoading = false;
      }, (error) => {
        this.isLoading = false;
        throw error;
      });
  }
}
