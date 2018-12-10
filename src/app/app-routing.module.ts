import { SettingsComponent } from './features/settings/settings/settings.component';
import { ModulesComponent } from './features/modules/modules/modules.component';
import { BrandingComponent } from './features/branding/branding/branding.component';
import { SummaryComponent } from './features/summary/summary/summary.component';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component:DashboardComponent, children:[
    {path:'', redirectTo:'summary', pathMatch:'full'},
    {path: 'summary', component:SummaryComponent},
    {path: 'branding', component:BrandingComponent},
    {path: 'modules', component:ModulesComponent},
    {path: 'settings', component:SettingsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
