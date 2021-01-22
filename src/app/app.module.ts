import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailSecurityComponent } from './email-security/email-security.component';
import { HomeComponent } from './home/home.component';
import { SslCertificateComponent } from './ssl-certificate/ssl-certificate.component';
import { EnterpriseEmailComponent } from './enterprise-email/enterprise-email.component';
import { DatacenterComponent } from './datacenter/datacenter.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { SpecialsComponent } from './specials/specials.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { BlackFridayComponent } from './black-friday/black-friday.component';
import { SharedHostingComponent } from './shared-hosting/shared-hosting.component';
import { CloudResellerComponent } from './cloud-reseller/cloud-reseller.component';
import { DedicatedServersComponent } from './dedicated-servers/dedicated-servers.component';
import { CloudVpsComponent } from './cloud-vps/cloud-vps.component';
import { WordpressHostingComponent } from './wordpress-hosting/wordpress-hosting.component';
import { DomainsNamesComponent } from './domains-names/domains-names.component';
import { DeveloperHostingComponent } from './developer-hosting/developer-hosting.component';
import { KnowledgeListComponent } from './knowledge-list/knowledge-list.component';
import { KnowledgeArticleComponent } from './knowledge-article/knowledge-article.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LegalComponent } from './legal/legal.component';
import { BlogComponent } from './blog/blog.component';
import { FaqComponent } from './faq/faq.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {CoreModule} from '../app/core/core/core.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmailSecurityComponent,
    HomeComponent,
    SslCertificateComponent,
    EnterpriseEmailComponent,
    DatacenterComponent,
    AboutUsComponent,
    PaymentMethodsComponent,
    SpecialsComponent,
    ComingSoonComponent,
    BlackFridayComponent,
    SharedHostingComponent,
    CloudResellerComponent,
    DedicatedServersComponent,
    CloudVpsComponent,
    WordpressHostingComponent,
    DomainsNamesComponent,
    DeveloperHostingComponent,
    KnowledgeListComponent,
    KnowledgeArticleComponent,
    ContactUsComponent,
    LegalComponent,
    BlogComponent,
    FaqComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
