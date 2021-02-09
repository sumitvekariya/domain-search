import { Component, Inject, OnInit } from '@angular/core';
import { DomainService } from '../core/domain.service';
import { groupBy } from 'lodash';
import { DOCUMENT } from '@angular/common';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recommendedDomains = [];
  priceByTLD = null;
  exactMatchDomain;
  suggestedDomain;
  intrestedDomain = [];

  constructor(
    private domainService: DomainService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    
  }

  addDomain(domain :any){
    this.intrestedDomain.push(domain);
    console.log(this.intrestedDomain);
    
  }

  seacrh(value: string) {
    forkJoin([this.domainService.searchRecommended(value), this.domainService.searchSpin(value)])
      .subscribe(([exact, spin]) => {
        
        this.exactMatchDomain = exact?.exactMatchDomain;
        this.suggestedDomain = exact?.suggestedDomains
        this.priceByTLD = groupBy(spin.Products, 'Tld');
        this.recommendedDomains = spin['RecommendedDomains'];
        console.log(this.recommendedDomains);
        
        this.document.getElementById('exact').scrollIntoView({
          behavior: 'smooth'
        });
      });
    // this.domainService.searchSpin(value).subscribe(res => {
    //   this.priceByTLD = groupBy(res.Products, 'Tld');
    //   this.recommendedDomains = res['RecommendedDomains'];

    //   this.document.getElementById('domain-list').scrollIntoView({
    //     behavior: 'smooth'
    //   });
    // });
  }

  prepareTableRow(domain) {
    const price = this.priceByTLD[domain.Extension];
    const domainPrice = price.length ? price[0] : price.find(p => p.ProductId === domain.ProductId);
    return { domain, price: domainPrice }
  }

  async addToCart(type, domain) {
    console.log(type, domain)

    const cart = await this.domainService.cart().toPromise();
    const items = JSON.stringify([{ id: type, domain }]);
    this.domainService.addToCart(items).subscribe({
      next: (d) => {
        console.log(d);
        this.document.location.href = cart.nextStepUrl;
      },
      error: (e) => {
        console.log(e, cart);
      }
    })
  }

}
