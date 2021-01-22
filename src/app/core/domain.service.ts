import { Injectable, Injector } from '@angular/core';
import { APIService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class DomainService extends APIService {
  constructor(protected injector: Injector) {
    super(injector);
  }

  sendRequest(searchString: string) {
    return super.get<any>(`search/spins?plid=499263&q=${searchString}`);
  }
}
