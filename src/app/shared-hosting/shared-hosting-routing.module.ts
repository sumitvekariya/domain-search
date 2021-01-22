import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedHostingComponent } from './shared-hosting.component';

const routes: Routes = [{path:'',component:SharedHostingComponent,pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedHostingRoutingModule { }
