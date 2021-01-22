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
                        {path:'email-security',loadChildren: () => import('./email-security/email-security.module').then(m => m.EmailSecurityModule)},
                        {path:'ssl',loadChildren: () => import('./ssl-certificate/ssl-certificate.module').then(m => m.SslCertificateModule) },
                        {path:'email',loadChildren: () => import('./enterprise-email/enterprise-email.module').then(m => m.EnterpriseEmailModule) },
                        {path:'datacenter',loadChildren: () => import('./datacenter/datacenter.module').then(m => m.DatacenterModule) },
                        {path:'payments',loadChildren: () => import('./payment-methods/payment-methods.module').then(m => m.PaymentMethodsModule) },
                        {path:'soon',loadChildren: () => import('./coming-soon/coming-soon.module').then(m => m.ComingSoonModule) },
                        {path:'promos',loadChildren: () => import('./specials/specials.module').then(m => m.SpecialsModule) },
                        {path:'blackfriday',loadChildren: () => import('./black-friday/black-friday.module').then(m => m.BlackFridayModule) },
                        {path:'hosting',loadChildren: () => import('./shared-hosting/shared-hosting.module').then(m => m.SharedHostingModule) },
                        {path:'reseller',loadChildren: () => import('./cloud-reseller/cloud-reseller.module').then(m => m.CloudResellerModule) },
                        {path:'dedicated',loadChildren: () => import('./dedicated-servers/dedicated-servers.module').then(m => m.DedicatedServersModule) },
                        {path:'vps',loadChildren: () => import('./cloud-vps/cloud-vps.module').then(m => m.CloudVpsModule) },
                        {path:'wordpress',loadChildren: () => import('./wordpress-hosting/wordpress-hosting.module').then(m => m.WordpressHostingModule) },
                        {path:'domains',loadChildren: () => import('./domains-names/domains-names.module').then(m => m.DomainsNamesModule) },
                        {path:'developer',loadChildren: () => import('./developer-hosting/developer-hosting.module').then(m => m.DeveloperHostingModule) },
                        {path:'knowledgebase-list',loadChildren: () => import('./knowledge-list/knowledge-list.module').then(m => m.KnowledgeListModule) },
                        {path:'knowledgebase-article',loadChildren: () => import('./knowledge-article/knowledge-article.module').then(m => m.KnowledgeArticleModule) },
                        {path:'contact',loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule) },
                        {path:'legal',loadChildren: () => import('./legal/legal.module').then(m => m.LegalModule) },
                        {path:'blog',loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
                        {path:'faq',loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule) },
                        { path: 'about', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) },];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
