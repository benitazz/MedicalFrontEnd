import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UploadListComponent } from './upload-list/upload-list.component';

const uploadRoutes: Routes = [
    { path: '', component: UploadListComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(uploadRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UploadRoutingModule {}

