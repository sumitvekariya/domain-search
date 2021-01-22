import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnowledgeArticleComponent } from './knowledge-article.component';

const routes: Routes = [{path:'',component:KnowledgeArticleComponent,pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowledgeArticleRoutingModule { }
