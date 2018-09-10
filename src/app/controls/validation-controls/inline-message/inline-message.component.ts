import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'inline-message',
  templateUrl: './inline-message.component.html',
  styleUrls: ['./inline-message.component.scss']
})
export class InlineMessageComponent implements OnInit {
  @Input() public message: any;

  constructor() { }

  public ngOnInit(): void {
  }

}
