import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Page } from '../models/page.model';

export abstract class BaseService<T> {
  constructor(public http: HttpClient) { }

  public abstract getPathModule(): string;

  public getById(id: number): Observable<T> {
    return this.http.get<T>(this.baseUrl + id, {headers: this.headers});
  }

  public getList(): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl, { headers: this.headers });
  }

  public getPagedList(page: number = 0, size: number = 10): Observable<Page<T>> {
    return this.http.get<Page<T>>(this.baseUrl, { headers: this.headers, params: this.getPagedListParams(page, size)});
  }

  public create(obj: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, obj, {headers: this.headers});
  }

  public update(obj: T, id: number): Observable<T> {
    return this.http.put<T>(this.baseUrl + id, obj, {headers: this.headers});
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + id, {headers: this.headers});
  }
  public deleteAll(ids: number[]): Observable<any> {
    const params = '?ids=' + ids.join('&ids=');
    return this.http.delete(this.baseUrl + 'all' + params, {headers: this.headers});
  }

  public getPagedListParams(page: number, size: number) {
    return {'page': page , 'size': size}
  }

  public get baseUrl(): string {
    return environment.serverUrl + this.getPathModule();

  }

  public get headers(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.append("Content-Type", 'application/json');
    return headers;
  }
}
