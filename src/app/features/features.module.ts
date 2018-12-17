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
  ]
})
export class FeaturesModule { }
