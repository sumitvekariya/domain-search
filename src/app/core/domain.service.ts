import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { APIService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class DomainService extends APIService {
  http:HttpClient;
  constructor(protected injector:Injector) {
    super(injector);
  }

  sendRequest(){
    return this.http.get<any>("http://www.secureserver.net/api/explore/#!/search/search_getSpins?plid=499263&q=any");
  }
}
