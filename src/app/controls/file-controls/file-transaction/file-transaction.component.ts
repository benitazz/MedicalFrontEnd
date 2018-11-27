import { Component, OnInit, Input } from '@angular/core';
import { FileTransaction, Lookup } from '../../../models';
import { FileTransactionType } from '../../../enums';
import '../../../common/extensions/string.extensions';

@Component({
  selector: 'file-transaction',
  templateUrl: './file-transaction.component.html',
  styleUrls: ['./file-transaction.component.scss']
})
export class FileTransactionComponent implements OnInit {
  @Input() public fileTransaction: FileTransaction;
  @Input() public transactionStatus: Lookup;

  public statusClass: string;
  public fileTransactionType: string;

  public isCollapsed: boolean;

  constructor() { }

  public ngOnInit(): void {
    this.statusClass = this.transactionStatus ? this.transactionStatus.name.toLowerCase() : String.Empty;

    if (this.fileTransaction && this.fileTransaction.fileTransactionTypeId) {
      this.fileTransactionType = FileTransactionType[this.fileTransaction.fileTransactionTypeId].toLowerCase();
    }

  }

  public toggle(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
