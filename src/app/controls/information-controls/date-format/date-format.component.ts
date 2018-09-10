import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'date-format',
  templateUrl: './date-format.component.html',
  styleUrls: ['./date-format.component.scss']
})
export class DateFormatComponent implements OnInit {
  @Input() public date: string;

  public dateFormat = environment.date_format;

  constructor() { }

  public ngOnInit(): void {

  }

}
