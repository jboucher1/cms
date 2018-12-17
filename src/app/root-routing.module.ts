import { AppListComponent } from './features/app/app-list/app-list.component';
import { AppComponent } from './features/app/app/app.component';
import { UsersComponent } from './features/users/users/users.component';
import { SettingsComponent } from './features/settings/settings/settings.component';
import { ModulesComponent } from './features/modules/modules/modules.component';
import { BrandingComponent } from './features/branding/branding/branding.component';
import { SummaryComponent } from './features/summary/summary/summary.component';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleListComponent } from './features/modules/module-list/module-list.component';

const modulesChildren: Routes = [
  {path:'', redirectTo:'add', pathMatch:'full'},
  {path: 'users', component:UsersComponent },
  {path:'add', component:ModuleListComponent }
]

const routes: Routes = [
  { path:'', redirectTo:'app/jesstest/dashboard', pathMatch:'full'},

  {path:'app/:url_name', component:AppComponent, children:[
    {path: 'dashboard', component:DashboardComponent, children:[
    {path:'', redirectTo:'summary', pathMatch:'full'},
    {path: 'summary', component:SummaryComponent},
    {path: 'branding', component:BrandingComponent},
    {path: 'modules', component:ModulesComponent, children: modulesChildren},
    {path: 'settings', component:SettingsComponent}
  ]}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
