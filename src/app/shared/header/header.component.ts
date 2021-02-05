import { Component, OnInit } from '@angular/core';
import { DomainService } from '../../core/domain.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cart = null;
  constructor(
    public domainService: DomainService
  ) {
    this.domainService.cartVal$.subscribe(c => this.cart = c);
  }

  ngOnInit(): void {
  }



}
