import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordpressHostingComponent } from './wordpress-hosting.component';

const routes: Routes = [{path:'',component:WordpressHostingComponent,pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordpressHostingRoutingModule { }
