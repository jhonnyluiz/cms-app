
import { Component, EventEmitter, Input, Output, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pageable } from '../../models/pageable.model';
import { Paginator } from '../../models/paginator.model';

@Component({
  selector: 'paginador-custom',
  templateUrl: './paginador-custom.component.html',
  styleUrls: ['./paginador-custom.component.css']
})
export class PaginadorCustomComponent implements OnInit, OnDestroy {

  @Output() change = new EventEmitter();
  @Input() showPaginator: boolean = false;

  paginator: Paginator = new Paginator(0, 10);
  firstItem: number = 0;
  lastItem: number = 0;
  totalElements: number = 0;
  listItensPorPage: number[] = [10, 20, 50]
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      "itensPerPage": new FormControl(this.paginator.size)
    });
    this.form.get('itensPerPage').valueChanges.subscribe(v => this.changeRows(v));
    this.setDataInformation(this.paginator);
  }

  ngOnDestroy(): void {
    this.change.unsubscribe();
  }

  changePaginator(event: any) {
    if (this.paginator.page != event.page || this.paginator.size != event.rows) {
      this.paginator.page = event.page;
      this.paginator.first = event.first;
      this.paginator.size = event.rows;
      this.setDataInformation(this.paginator);
      this.change.emit();
    }
  }

  getPage(): number {
    return this.paginator.page;
  }

  getSize(): number {
    return this.paginator.size;
  }

  setTotalElements(totalElements: number) {
    this.paginator.totalElements = totalElements;
    this.setDataInformation(this.paginator);
  }

  setDataInformation(p: Paginator) {
    this.firstItem = p.first + 1;
    this.lastItem = (p.page * p.size) + p.size;
    this.totalElements = p.totalElements;
  }

  changeRows(value: string) {
    this.paginator = new Paginator(0, Number.parseInt(value), 0, this.totalElements);
    this.setDataInformation(this.paginator);
  }

}
