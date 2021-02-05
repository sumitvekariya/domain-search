import { Component } from '@angular/core';
import { DomainService } from './core/domain.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'domain-search';

  constructor(
    private domainService: DomainService
  ) {
    this.domainService.cart().subscribe();
  }
}
