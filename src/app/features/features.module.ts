import { ModulesModule } from './modules/modules.module';
import { BrandingModule } from './branding/branding.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryModule } from './summary/summary.module';
import { SettingsModule } from './settings/settings.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
    SummaryModule,
    BrandingModule,
    ModulesModule,
    SettingsModule
  ]
})
export class FeaturesModule { }
