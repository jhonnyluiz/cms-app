import { Sort } from "./sort.model";

export class Pageable {
  constructor(
    public sort: Sort,
    public offset: number = 0,
    public pageNumber: number = 0,
    public pageSize: number = 20,
    public unpaged: boolean = false,
    public paged: boolean = true
  ) { }
}
