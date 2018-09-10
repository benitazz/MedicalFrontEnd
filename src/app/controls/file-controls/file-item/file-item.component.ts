import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FileUploadStatus } from '../../../enums';
import { FileDetail, Lookup } from '../../../models';
import { FileStatuslookupService } from '../../../services';

@Component({
  selector: 'file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss']
})
export class FileItemComponent implements OnInit, OnDestroy {
  @Input() public fileDetail: FileDetail;
  public fileStatuses: Array<Lookup>;

  private _fileStatusSubscription: Subscription;
  public statusClass: string;

  constructor(private _fileStatusService: FileStatuslookupService) { }

  public ngOnInit(): void {
    this.statusClass = FileUploadStatus[FileUploadStatus.Approved].toLowerCase();

    this._fileStatusSubscription = this._fileStatusService
      .getAll()
      .subscribe(data => {
        this.fileStatuses = data;
        if (this.fileStatuses && this.fileStatuses.length > 0) {
          const fileStatus = this.fileStatuses.find(status => status.id === this.fileDetail.fileStatusId);
          if (fileStatus) {
            this.statusClass = FileUploadStatus[fileStatus.id].toLowerCase();
          }
        }
      });
  }

  public ngOnDestroy(): void {
    if (this._fileStatusSubscription) {
      this._fileStatusSubscription.unsubscribe();
    }
  }
}
