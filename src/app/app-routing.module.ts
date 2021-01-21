import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailSecurityComponent } from './email-security/email-security.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:'',component:HomeComponent,pathMatch:'full'},
                        {path:'emailsecurity',component:EmailSecurityComponent,pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
