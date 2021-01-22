import { Component, OnInit } from '@angular/core';
import {DomainService} from '../core/domain.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private service:DomainService) { }

  ngOnInit(): void {
    this.service.sendRequest().subscribe(res=>console.log(res));
  }

}
