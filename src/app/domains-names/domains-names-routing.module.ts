import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomainsNamesComponent } from './domains-names.component';

const routes: Routes = [{path:'',component:DomainsNamesComponent,pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainsNamesRoutingModule { }
