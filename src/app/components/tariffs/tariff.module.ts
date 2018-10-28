import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TariffDetailsComponent } from './tariff-details/tariff-details.component';
import { TariffListComponent } from './tariff-list/tariff-list.component';
import { TariffItemComponent } from './tariff-item/tariff-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TariffDetailsComponent, TariffListComponent, TariffItemComponent]
})
export class TariffModule { }
