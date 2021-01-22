import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DedicatedServersComponent } from './dedicated-servers.component';

const routes: Routes = [{path:'',component:DedicatedServersComponent,pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DedicatedServersRoutingModule { }
