import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Modules
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { NgbDropdownModule, NgbModule  } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AdminItemComponent } from './admin-controls/admin-item/admin-item.component';
import { BusySelectComponent } from './dropdown-controls/busy-select/busy-select.component';
import { CollapsibleModule } from 'angular2-collapsible';
import { CurrencyFormatComponent } from './information-controls/currency-format/currency-format.component';

import { DataLoadingControlComponent } from './data-loading-controls/data-loading-control/data-loading-control.component';
import { DateFormatComponent } from './information-controls/date-format/date-format.component';
import { DateRangePickerComponent } from './date-controls/date-range-picker/date-range-picker.component';
import { DetailsPanelComponent } from './panel-controls/details-panel/details-panel.component';
import { DirectivesModule } from '../directives/directives.module';
import { DropdownDateComponent } from './date-controls/dropdown-date/dropdown-date.component';

import { FileHeaderComponent } from './file-controls/file-header/file-header.component';
import { FileItemComponent } from './file-controls/file-item/file-item.component';
import { FileTransactionComponent } from './file-controls/file-transaction/file-transaction.component';
import { FileTransactionListComponent } from './file-controls/file-transaction-list/file-transaction-list.component';

import { HeaderPanelComponent } from './panel-controls/header-panel/header-panel.component';
import { InlineMessageComponent } from './validation-controls/inline-message/inline-message.component';
import { MainButtonsComponent } from './buttons-controls/main-buttons/main-buttons.component';

import { NoResultComponent } from './information-controls/no-result/no-result.component';
import { NotificationBannerComponent } from './information-controls/notification-banner/notification-banner.component';
import { PanelComponent } from './panel-controls/panel/panel.component';

import { SearchBarComponent } from './search-controls/search-bar/search-bar.component';
import { SearchInputComponent } from './search-controls/search-input/search-input.component';
import { StandardSearchBarComponent } from './search-controls/standard-search-bar/standard-search-bar.component';

import { TextAreaInputComponent } from './inputs-controls/text-area-input/text-area-input.component';

import { VerticalSeparatorComponent } from './separator-controls/vertical-separator/vertical-separator.component';
import { UserPanelComponent } from './panel-controls/user-panel/user-panel.component';

@NgModule({
  imports: [
    CollapsibleModule,
    CommonModule,
    DirectivesModule,
    FormsModule,
    MyDateRangePickerModule,
    NgxMyDatePickerModule,
    NgbDropdownModule.forRoot(),
    NgbModule.forRoot()
  ],
  declarations: [
    AdminItemComponent,
    BusySelectComponent,
    CurrencyFormatComponent,
    DataLoadingControlComponent,
    DateFormatComponent,
    DateRangePickerComponent,
    DetailsPanelComponent,
    DropdownDateComponent,
    FileHeaderComponent,
    FileItemComponent,
    FileTransactionComponent,
    FileTransactionListComponent,
    HeaderPanelComponent,
    InlineMessageComponent,
    MainButtonsComponent,
    NoResultComponent,
    NotificationBannerComponent,
    PanelComponent,
    SearchBarComponent,
    SearchInputComponent,
    StandardSearchBarComponent,
    TextAreaInputComponent,
    VerticalSeparatorComponent,
    UserPanelComponent
  ],
  exports: [
    AdminItemComponent,
    BusySelectComponent,
    CurrencyFormatComponent,
    DataLoadingControlComponent,
    DateFormatComponent,
    DateRangePickerComponent,
    DetailsPanelComponent,
    DropdownDateComponent,
    FileHeaderComponent,
    FileItemComponent,
    FileTransactionComponent,
    FileTransactionListComponent,
    HeaderPanelComponent,
    InlineMessageComponent,
    MainButtonsComponent,
    NoResultComponent,
    NotificationBannerComponent,
    PanelComponent,
    SearchBarComponent,
    SearchInputComponent,
    StandardSearchBarComponent,
    TextAreaInputComponent,
    VerticalSeparatorComponent,
    UserPanelComponent
  ]
})
export class ControlsModule { }
