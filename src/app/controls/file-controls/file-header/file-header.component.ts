import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FileDetail } from '../../../models';

@Component({
  selector: 'file-header',
  templateUrl: './file-header.component.html',
  styleUrls: ['./file-header.component.scss']
})
export class FileHeaderComponent implements OnInit {
  @Input() public fileDetail: FileDetail;
  constructor(private _location: Location) { }

  public ngOnInit(): void {
  }

  public onBack(): void {
    this._location.back();
  }
}
