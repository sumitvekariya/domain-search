import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeveloperHostingComponent } from './developer-hosting.component';

const routes: Routes = [{path:'',component:DeveloperHostingComponent,pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloperHostingRoutingModule { }
