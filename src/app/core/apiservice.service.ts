// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class APIServiceService {

//   constructor() { }
// }

import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  protected environment = environment;
  private httpClient: HttpClient;

  protected get apiUrl(): string {
    return this.environment.apiUrl || 'https://www.secureserver.net/api/v1';
  }

  constructor(protected injector: Injector) {
    this.httpClient = injector.get(HttpClient);
  }

  get<T>(path: string, options: { [param: string]: any } = {}): Observable<T> {
    return this.httpClient.get<T>(`${this.apiUrl}/${path}`, options);
  }

  post<T>(path: string, body: any, options: { [param: string]: any } = {}): Observable<T> {
    return this.httpClient.post<T>(`${this.apiUrl}/${path}`, body, options);
  }

  patch<T>(path: string, body: any, options: { [param: string]: any } = {}): Observable<T> {
    return this.httpClient.patch<T>(`${this.apiUrl}/${path}`, body, options);
  }

  put<T>(path: string, body: any, options: { [param: string]: any } = {}): Observable<T> {
    return this.httpClient.put<T>(`${this.apiUrl}/${path}`, body);
  }

  delete<T>(path: string, options: { [param: string]: any } = {}): Observable<T> {
    return this.httpClient.delete<T>(`${this.apiUrl}/${path}`, options);
  }
}