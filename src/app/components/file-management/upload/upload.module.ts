import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UploadListComponent } from './upload-list/upload-list.component';
import { UploadDetailsComponent } from './upload-details/upload-details.component';
import { UploadItemComponent } from './upload-item/upload-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    UploadListComponent,
    UploadDetailsComponent,
    UploadItemComponent
  ],
  exports: [
    UploadListComponent,
    UploadDetailsComponent,
    UploadItemComponent
  ]
})
export class UploadModule { }
