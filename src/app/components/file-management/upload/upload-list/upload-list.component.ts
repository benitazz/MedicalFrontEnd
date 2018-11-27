import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Lookup, FileDetail, FileFilter } from '../../../../models';
import { ConstantMessage, Constants, ComponentBase } from '../../../../common';
import { BannerService } from '../../../../services';
import '../../../../common/extensions/string.extensions';

@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.scss']
})
export class UploadListComponent extends ComponentBase implements OnInit {
  public fileStatuses: Array<Lookup>;
  public fileName: string;
  public paymentFiles: Array<FileDetail>;
  public placeholder: string;
  public selectText: string;

  @ViewChild('uploadFile') public uploadFileRef: ElementRef;

  private _fileFilter: FileFilter;

  constructor(private _bannerService: BannerService) { 
    super();
  }

  public ngOnInit(): void {
  }

  public fileChangeListener(files: FileList): void {
    this.resetFileName();
    debugger
    if (files && files.length > 0) {
      const file: File = files.item(0);

      const fileExtension = file.name.split('.').pop().toLowerCase();

      if (fileExtension !== Constants.CSV_EXTENSION) {
        this._bannerService.showError(`${ConstantMessage.FILE_FORMAT_ERROR_MESSAGE} ${file.name}`);
        this.uploadFileRef.nativeElement.value = String.Empty;
        return;
      }

      this.upLoadFile(file);
    }
  }

  public onDateRangeChanged($event): void {
   // this._fileFilter.dateFilter = $event;
   // this.filterFiles();
  }

  public searchInputChanged($searchText: string): void {
   // this._fileFilter.searchFilter = $searchText;
   // this.filterFiles();
  }

  public filterOptionChanged($selectedLookup: Lookup): void {
    this._fileFilter.statusFilter = $selectedLookup;
    this.filterFiles();
  }

  private upLoadFile(file: File): void {
    this.isLoading = true;
    const reader: FileReader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      const paymentFile = {} as FileDetail;
      const fileContent  = reader.result;
      if (typeof fileContent  !== "string"){
        throw new Error("There was a problem reading the file content")
      }

      paymentFile.fileContent = btoa(fileContent);
      paymentFile.fileName = file.name;
      // paymentFile.fileStatusId = FileUploadStatus.Pending;

      /*this._uploaderService.post(paymentFile)
        .subscribe((uploadedFile: FileDetail) =>q {
          this.paymentFiles.splice(0, 0, uploadedFile);
          this._bannerService.showSuccess(ConstantMessage.SUCCESS_UPLOAD_MESSAGE);
          this.isLoading = false;
        }, (error: AppError) => {
          if (error instanceof BadInput) {
            this._bannerService.showError(ConstantMessage.FILE_FORMAT_ERROR_MESSAGE);
            this.isLoading = false;
            return;
          }

          if (error instanceof ConflictError) {
            this._bannerService.showError(ConstantMessage.DUPLICATE_FILE_ERROR_MESSAGE);
            this.isLoading = false;
            return;
          }
          throw error;
        });*/      
    };
  }

  private resetFileName(): void {
    this.fileName = 'Choose comma delimeter .csv file...';
  }

  private setUploadedFiles(): void {
    /* forkJoin(this._fileService.getFiles(),
      this._fileStatusService.getAll())
      .pipe(
        map(joined => new Object({ paymentFiles: joined[0], fileStatuses: joined[1] }))
      )
      .subscribe((data: any) => {
        this.paymentFiles = data.paymentFiles;
        this.fileStatuses = data.fileStatuses;
        this.isLoading = false;
      }, (error) => {

      }, () => {
        if (!this.fileStatuses.find(status => status.id === -1)) {
          const selectAll = {} as Lookup;
          selectAll.id = -1;
          selectAll.name = ConstantMessage.SELECT_ALL;
          this.fileStatuses.splice(0, 0, selectAll);
        }
      });*/
  }

  private filterFiles(): void {
    /*this.isLoading = true;
    delete this.paymentFiles;

    this._fileService.getFiles(this._fileFilter)
      .subscribe((data: any) => {
        this.paymentFiles = data;
        this.isLoading = false;
      }, (error) => {
        this.isLoading = false;
      });*/
  }
}
