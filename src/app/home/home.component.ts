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
  recDomains: any;
  pByTLD: any;
  sDomain: any;
  eDomain: any;

  constructor(
    private domainService: DomainService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    
  }

  

  seacrh(value: string) {
    forkJoin([this.domainService.searchRecommended(value), this.domainService.searchSpin(value)])
      .subscribe(([exact, spin]) => {
        
        this.exactMatchDomain = exact?.exactMatchDomain;
        this.suggestedDomain = exact?.suggestedDomains
        this.priceByTLD = groupBy(spin.Products, 'Tld');
        this.recommendedDomains = spin['RecommendedDomains'];
        
        
        this.document.getElementById('exact').scrollIntoView({
          behavior: 'smooth'
        });
      });
  }

  addDomain(domain :any){
    
    forkJoin([this.domainService.searchRecommended(domain.domain), this.domainService.searchSpin(domain.domain)])
      .subscribe(([exact, spin]) => {
        
        this.eDomain = exact?.exactMatchDomain;
        this.sDomain = exact?.suggestedDomains
        this.pByTLD = groupBy(spin.Products, 'Tld');
        this.recDomains = spin['RecommendedDomains'];
        
        
        this.document.getElementById('exact').scrollIntoView({
          behavior: 'smooth'
        });
        this.intrestedDomain.push({exactMatchDomain:this.eDomain,suggestedDomain:this.sDomain,priceByTLD:this.pByTLD,recommendedDomains:this.recDomains});
      });    
    // console.log(this.intrestedDomain);
  }

  removeCard(value:any){
    
    if(this.intrestedDomain.indexOf(value) > -1){
      this.intrestedDomain.splice(this.intrestedDomain.indexOf(value),1);
    }
    console.log(this.intrestedDomain);
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
