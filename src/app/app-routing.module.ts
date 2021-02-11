import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './Domains/search/search.component';
import { TransferComponent } from './Domains/transfer/transfer.component';
import { ProfessionalComponent } from './Email/professional/professional.component';
import { WorkspaceComponent } from './Email/workspace/workspace.component';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './Hosting/business/business.component';
import { CpanelComponent } from './Hosting/cpanel/cpanel.component';
import { DedicatedComponent } from './Hosting/dedicated/dedicated.component';
import { PleskComponent } from './Hosting/plesk/plesk.component';
import { VPSComponent } from './Hosting/vps/vps.component';
import { WordpressComponent } from './Hosting/wordpress/wordpress.component';
import { EmailMarketingComponent } from './Marketing/email-marketing/email-marketing.component';
import { SeoComponent } from './Marketing/seo/seo.component';
import { NodataComponent } from './nodata/nodata.component';
import { ResellerComponent } from './reseller/reseller.component';
import { SSLComponent } from './Security/ssl/ssl.component';
import { WebsiteBackupComponent } from './Security/website-backup/website-backup.component';
import { WebsiteSecurityComponent } from './Security/website-security/website-security.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'domains/domain-name-search', component: SearchComponent },
  { path: 'domains/domains-transfer', component: TransferComponent },
  { path: 'hosting/cpanel-web-hosting', component: CpanelComponent },
  { path: 'hosting/windows-web-hosting', component: PleskComponent },
  { path: 'hosting/business-hosting', component: BusinessComponent },
  { path: 'hosting/managed-wordpress-hosting', component: WordpressComponent },
  { path: 'hosting/vps-hosting', component: VPSComponent },
  { path: 'hosting/dedicated-server-hosting', component: DedicatedComponent },
  { path: 'security/ssl-certificate', component: SSLComponent },
  { path: 'security/website-security', component: WebsiteSecurityComponent },
  { path: 'security/website-backup', component: WebsiteBackupComponent },
  { path: 'marketing/email-marketing', component: EmailMarketingComponent },
  { path: 'marketing/seo', component: SeoComponent },
  { path: 'email/workspace-email', component: WorkspaceComponent },
  { path: 'email/professional-email', component: ProfessionalComponent },
  { path: 'join/partner-program', component: ResellerComponent },
  { path: '**', component: NodataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
