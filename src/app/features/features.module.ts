import { WidgetsModule } from './widgets/widgets.module';
import { CompaniesModule } from './companies/companies.module';
import { HtmlModule } from './html/html.module';
import { ContentModule } from './content/content.module';
import { ModulesModule } from './modules/modules.module';
import { BrandingModule } from './branding/branding.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryModule } from './summary/summary.module';
import { SettingsModule } from './settings/settings.module';
import { UsersModule } from './users/users.module';
import { AppModule } from './app/app.module';
import { SharedModule } from '../shared/shared.module';
import { IframeModule } from './iframe/iframe.module';
import { InfoModule } from './info/info.module';


@NgModule({
  declarations: [],
  imports: [
    AppModule,
    CommonModule,
    ContentModule,
    DashboardModule,
    SummaryModule,
    BrandingModule,
    ModulesModule,
    SettingsModule,
    UsersModule,
    SharedModule,
    IframeModule,
    HtmlModule,
    CompaniesModule,
    WidgetsModule,
    InfoModule
  ]
})
export class FeaturesModule { }
