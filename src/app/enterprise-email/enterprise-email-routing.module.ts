import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterpriseEmailComponent } from './enterprise-email.component';

const routes: Routes = [{path:'',component:EnterpriseEmailComponent,pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterpriseEmailRoutingModule { }
