import { Component, Inject, OnInit } from '@angular/core';
import { DomainService } from '../core/domain.service';
import { groupBy } from 'lodash';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recommendedDomains = [];
  priceByTLD = null;

  constructor(
    private domainService: DomainService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
  }

  seacrh(value: string) {
    this.domainService.sendRequest(value).subscribe(res => {
      this.priceByTLD = groupBy(res.Products, 'Tld');
      this.recommendedDomains = res['RecommendedDomains'];

      this.document.getElementById('domain-list').scrollIntoView({
        behavior: 'smooth'
      });
    });
  }

  prepareTableRow(domain) {
    const price = this.priceByTLD[domain.Extension];
    const domainPrice = price.length ? price[0] : price.find(p => p.ProductId === domain.ProductId);
    return { domain, price: domainPrice }
  }

}
