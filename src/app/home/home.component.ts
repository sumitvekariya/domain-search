import { Component, Inject, OnInit } from '@angular/core';
import { DomainService } from '../core/domain.service';
import { groupBy } from 'lodash';
import { DOCUMENT } from '@angular/common';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recommendedDomains = [];
  priceByTLD = null;
  exactMatchDomain;

  constructor(
    private domainService: DomainService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    // forkJoin([this.domainService.searchRecommended('test12sd'), this.domainService.searchSpin('test')]).subscribe(([exact, spin]) => {
    //   this.exactMatchDomain = exact?.exactMatchDomain;
    // });
  }

  seacrh(value: string) {
    forkJoin([this.domainService.searchRecommended(value), this.domainService.searchSpin(value)])
      .subscribe(([exact, spin]) => {
        this.exactMatchDomain = exact?.exactMatchDomain;

        this.priceByTLD = groupBy(spin.Products, 'Tld');
        this.recommendedDomains = spin['RecommendedDomains'];

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

}
