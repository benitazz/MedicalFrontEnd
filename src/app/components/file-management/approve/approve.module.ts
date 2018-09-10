import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApproveListComponent } from './approve-list/approve-list.component';
import { ApproveItemComponent } from './approve-item/approve-item.component';
import { ApproveDetailsComponent } from './approve-details/approve-details.component';

import { ApproveService } from './approve.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ApproveListComponent,
    ApproveItemComponent,
    ApproveDetailsComponent
  ],
  exports: [
    ApproveListComponent,
    ApproveItemComponent,
    ApproveDetailsComponent
  ],
  providers: [
    ApproveService
  ]
})
export class ApproveModule { }
