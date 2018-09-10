import { Component, OnInit, Input } from '@angular/core';
import { LoaderType } from '../../../enums';

@Component({
  selector: 'data-loading-control',
  templateUrl: './data-loading-control.component.html',
  styleUrls: [
    './data-loading-control.component.scss',
    './data-loading-control-skeleton.scss',
    '../../../../styles/style-data-loader.scss',
    './data-loading-control-spinner.scss']
})
export class DataLoadingControlComponent implements OnInit {
  @Input() public showLoading = true;
  @Input() public levels = 1;
  @Input() public loaderType: LoaderType = LoaderType.Skeleton;
  public loaderTypeEnum = LoaderType;

  public layers: Array<number> = [];
  constructor() {
  }

  public ngOnInit(): void {
    if (this.loaderType === LoaderType.Skeleton) {
      for (let i = 1; i <= this.levels; i++) {
        this.layers.push(i);
      }
    }
  }
}
