import { Injectable, Injector } from '@angular/core';
import { APIService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class DomainService extends APIService {
  constructor(protected injector: Injector) {
    super(injector);
  }

  searchSpin(searchString: string) {
    return super.get<any>(`search/spins?plid=499263&q=${searchString}`);
  }

  searchRecommended(searchString: string) {
    return super.get<any>(`domains/499263?pageSize=5&q=${searchString}`);
  }
}
