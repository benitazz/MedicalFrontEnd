import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'details-panel',
  templateUrl: './details-panel.component.html',
  styleUrls: ['./details-panel.component.scss']
})
export class DetailsPanelComponent implements OnInit {
  @Input() public removePadding = false;

  constructor() { }

  public ngOnInit(): void {
  }

}
