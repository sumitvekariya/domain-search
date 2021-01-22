import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatacenterComponent } from './datacenter.component';

const routes: Routes = [{path:'',component:DatacenterComponent,pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatacenterRoutingModule { }
