import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CloudVpsComponent } from './cloud-vps.component';

const routes: Routes = [{path:'',component:CloudVpsComponent,pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CloudVpsRoutingModule { }
