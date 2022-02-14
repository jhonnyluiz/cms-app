import { Pageable } from "./pageable.model";
import { Sort } from "./sort.model";

export class Page<T> {
  constructor(
    public content: T[],
    public pageable: Pageable,
    public last: boolean,
    public totalElements: number,
    public totalPages: number,
    public number: number,
    public size: number,
    public sort: Sort,
    public first: boolean,
    public numberOfElements: number,
    public empty: boolean
  ) {}
}
