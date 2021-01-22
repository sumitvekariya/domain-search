import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SslCertificateComponent } from './ssl-certificate.component';

const routes: Routes = [{path:'',component:SslCertificateComponent,pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SslCertificateRoutingModule { }
