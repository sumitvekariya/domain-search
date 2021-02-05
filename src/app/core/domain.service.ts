import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { APIService } from './apiservice.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DomainService extends APIService {
  cart$ = new BehaviorSubject(null);
  cartVal$ = this.cart$.asObservable();

  constructor(protected injector: Injector) {
    super(injector);
  }

  searchSpin(searchString: string) {
    return super.get<any>(`search/spins?plid=${environment.plID}&q=${searchString}`, { withCredentials: true });
  }

  searchRecommended(searchString: string) {
    return super.get<any>(`domains/${environment.plID}?pageSize=5&q=${searchString}`, { withCredentials: true });
  }

  cart() {
    return super.get<any>(`cart/${environment.plID}`, { withCredentials: true }).pipe(
      tap(cart => this.cart$.next(cart))
    )
  }

  addToCart(items) {
    const params = new HttpParams().set('items', items).set('skipCrossSell', 'false').set('isc', '');
    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'access-control-allow-origin': "http://localhost:4200/" });
    return super.post<any>(`cart/${environment.plID}/?redirect=false`, params.toString(), { headers, withCredentials: true })
  }
}
