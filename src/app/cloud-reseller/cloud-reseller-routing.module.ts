import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CloudResellerComponent } from './cloud-reseller.component';

const routes: Routes = [{path:'',component:CloudResellerComponent,pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CloudResellerRoutingModule { }
