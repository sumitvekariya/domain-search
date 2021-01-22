import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlackFridayComponent } from './black-friday.component';

const routes: Routes = [{path:'',component:BlackFridayComponent,pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlackFridayRoutingModule { }
