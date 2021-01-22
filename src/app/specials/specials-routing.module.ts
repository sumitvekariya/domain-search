import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialsComponent } from './specials.component';

const routes: Routes = [{path:'',component:SpecialsComponent,pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialsRoutingModule { }
