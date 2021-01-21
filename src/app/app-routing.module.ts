import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlackFridayComponent } from './black-friday/black-friday.component';
import { BlogComponent } from './blog/blog.component';
import { CloudResellerComponent } from './cloud-reseller/cloud-reseller.component';
import { CloudVpsComponent } from './cloud-vps/cloud-vps.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DatacenterComponent } from './datacenter/datacenter.component';
import { DedicatedServersComponent } from './dedicated-servers/dedicated-servers.component';
import { DeveloperHostingComponent } from './developer-hosting/developer-hosting.component';
import { DomainsNamesComponent } from './domains-names/domains-names.component';
import { EmailSecurityComponent } from './email-security/email-security.component';
import { EnterpriseEmailComponent } from './enterprise-email/enterprise-email.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { KnowledgeArticleComponent } from './knowledge-article/knowledge-article.component';
import { KnowledgeListComponent } from './knowledge-list/knowledge-list.component';
import { LegalComponent } from './legal/legal.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { SharedHostingComponent } from './shared-hosting/shared-hosting.component';
import { SpecialsComponent } from './specials/specials.component';
import { SslCertificateComponent } from './ssl-certificate/ssl-certificate.component';
import { WordpressHostingComponent } from './wordpress-hosting/wordpress-hosting.component';

const routes: Routes = [{path:'',component:HomeComponent,pathMatch:'full'},
                        {path:'email-security',component:EmailSecurityComponent,pathMatch:'full'},
                        {path:'ssl',component:SslCertificateComponent,pathMatch:'full'},
                        {path:'email',component:EnterpriseEmailComponent,pathMatch:'full'},
                        {path:'datacenter',component:DatacenterComponent,pathMatch:'full'},
                        {path:'about',component:AboutUsComponent,pathMatch:'full'},
                        {path:'payments',component:PaymentMethodsComponent,pathMatch:'full'},
                        {path:'soon',component:ComingSoonComponent,pathMatch:'full'},
                        {path:'promos',component:SpecialsComponent,pathMatch:'full'},
                        {path:'blackfriday',component:BlackFridayComponent,pathMatch:'full'},
                        {path:'hosting',component:SharedHostingComponent,pathMatch:'full'},
                        {path:'reseller',component:CloudResellerComponent,pathMatch:'full'},
                        {path:'dedicated',component:DedicatedServersComponent,pathMatch:'full'},
                        {path:'vps',component:CloudVpsComponent,pathMatch:'full'},
                        {path:'wordpress',component:WordpressHostingComponent,pathMatch:'full'},
                        {path:'domains',component:DomainsNamesComponent,pathMatch:'full'},
                        {path:'developer',component:DeveloperHostingComponent,pathMatch:'full'},
                        {path:'knowledgebase-list',component:KnowledgeListComponent,pathMatch:'full'},
                        {path:'knowledgebase-article',component:KnowledgeArticleComponent,pathMatch:'full'},
                        {path:'contact',component:ContactUsComponent,pathMatch:'full'},
                        {path:'legal',component:LegalComponent,pathMatch:'full'},
                        {path:'blog',component:BlogComponent,pathMatch:'full'},
                        {path:'faq',component:FaqComponent,pathMatch:'full'},];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
