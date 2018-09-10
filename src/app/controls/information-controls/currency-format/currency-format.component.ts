import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'currency-format',
  templateUrl: './currency-format.component.html',
  styleUrls: ['./currency-format.component.scss']
})
export class CurrencyFormatComponent implements OnInit {
  @Input() public amount: number;

  constructor() { }

  public ngOnInit(): void {
  }

}
