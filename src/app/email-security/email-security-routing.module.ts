import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailSecurityComponent } from './email-security.component';

const routes: Routes = [{path:'',component:EmailSecurityComponent,pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailSecurityRoutingModule { }
