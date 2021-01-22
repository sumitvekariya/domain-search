import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnowledgeListComponent } from './knowledge-list.component';

const routes: Routes = [{path:'',component:KnowledgeListComponent,pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowledgeListRoutingModule { }
