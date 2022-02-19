import { Component, Input, OnInit } from '@angular/core';
import { ActionButton } from '../../models/action-button.model';
import { CommonPageConfig } from '../../models/common-page-config.model';

@Component({
  selector: 'common-page',
  templateUrl: './common-page.component.html',
  styleUrls: ['./common-page.component.scss']
})
export class CommonPageComponent implements OnInit {

  @Input() config: CommonPageConfig;
  @Input() btnActions: ActionButton[];

  constructor() { }

  ngOnInit(): void {
  }
}
