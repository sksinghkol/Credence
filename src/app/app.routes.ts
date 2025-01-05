import { Routes } from '@angular/router';
import { AboutUsComponent } from './company/about-us/about-us.component';
import { OurTeamComponent } from './company/our-team/our-team.component';
import { BrouchersComponent } from './company/brouchers/brouchers.component';
import { CareerComponent } from './company/career/career.component';
import { ContactUsComponent } from './company/contact-us/contact-us.component';
import { NewsComponent } from './company/news/news.component';
import { OurCustomerComponent } from './company/our-customer/our-customer.component';
import { OurNetworkComponent } from './company/our-network/our-network.component';
import { PolicyComponent } from './company/policy/policy.component';
import { SitemapComponent } from './company/sitemap/sitemap.component';
import { VideoWebnarsComponent } from './company/video-webnars/video-webnars.component';
import { HomeComponent } from './home/home.component';
import { SchoolErpComponent } from './Software/school-erp/school-erp.component';
import { CrmsComponent } from './Software/crms/crms.component';
import { CustomizedSoftwareComponent } from './Software/customized-software/customized-software.component';

import { AppDevelopmentComponent } from './Software/app-development/app-development.component';
import { PortfolioComponent } from './Webiste/portfolio/portfolio.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    { path: 'About-Us', component: AboutUsComponent }, 
    { path: 'Our_Team', component: OurTeamComponent },
    { path:'Brouchers', component: BrouchersComponent },
    { path:'Career', component: CareerComponent },
    { path:'ContactUs', component: ContactUsComponent },
    { path:'News',component: NewsComponent},
    { path:'OurCustomer', component: OurCustomerComponent },
    { path:'OurNetwork', component: OurNetworkComponent },
    { path:'Policy', component: PolicyComponent },
    { path:'Sitemap', component: SitemapComponent },
    { path:'Video', component: VideoWebnarsComponent },
    {path: 'Erp', component: SchoolErpComponent},
    {path: 'crms', component: CrmsComponent},
    {path:'Customized Software',component:CustomizedSoftwareComponent},
    {path:'AppDevelopment',component:AppDevelopmentComponent},
    {path:'Portfolio',component:PortfolioComponent}  ,  
];
