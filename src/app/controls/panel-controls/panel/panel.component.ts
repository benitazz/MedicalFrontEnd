import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() public removePadding: boolean;

  constructor() { }

   public ngOnInit(): void {
  }

}
