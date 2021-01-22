import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DomainService } from '../core/domain.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    HttpClientModule
  ],
  providers:[DomainService]
})
export class AboutUsModule { }
