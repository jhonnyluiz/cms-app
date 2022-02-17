import { ActionButton } from './../../models/action-button.model';
import { Component, Input, OnInit } from '@angular/core';
import { CommonListConfig } from '../../models/common-list-config.model';
import { Router } from '@angular/router';

@Component({
  selector: 'common-list',
  templateUrl: './common-list.component.html',
  styleUrls: ['./common-list.component.scss']
})
export class CommonListComponent implements OnInit {

  @Input() config: CommonListConfig;
  public readonly _actions: ActionButton[] = new Array(ActionButton.btnNovo(() => this._goToNovo()), ActionButton.btnExcluir(() => this._goToExcluir()));

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public _goToNovo = () => {
    this.router.navigate([this.config.baseUrl, 'new']);
  }

  public _goToExcluir = () => {
    console.log('go to excluir')
  }

  public changeBtnDisabled(indexActions: number, disabled: boolean) {
    if (this._actions[indexActions]) {
      this._actions[indexActions].disabled = disabled;
    }
  }
}
