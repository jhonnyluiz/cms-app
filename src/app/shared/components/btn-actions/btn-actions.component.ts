import { ActionButton } from './../../models/action-button.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'btn-actions',
  templateUrl: './btn-actions.component.html',
  styleUrls: ['./btn-actions.component.scss']
})
export class BtnActionsComponent implements OnInit {


  @Input() buttons: ActionButton[];
  @Input() justify: string = 'center';
  constructor() { }

  ngOnInit(): void {
  }

}
