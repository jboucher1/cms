import { InfoComponent } from './features/info/info/info.component';
import { HtmlComponent } from './features/html/html/html.component';
import { WidgetsComponent } from './features/widgets/widgets/widgets.component';
import { CompaniesComponent } from './features/companies/companies/companies.component';
import { ProfileComponent } from './features/app/profile/profile.component';
import { LogoutComponent } from './features/app/logout/logout.component';
import { LoginComponent } from './features/app/login/login.component';
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
import { TermsComponent } from './features/app/terms/terms.component';
import { IframeComponent } from './features/iframe/iframe.component';

const modulesChildren: Routes = [
  { path: '', redirectTo: 'add', pathMatch: 'full' },
  { path: 'users/:id', component: UsersComponent },
  { path: 'companies/:id', component: CompaniesComponent },
  { path: 'iframe/:id', component: IframeComponent },
  { path: 'widgets/:id', component: WidgetsComponent },
  { path: 'html/:id', component: HtmlComponent },
  { path: 'info/:id', component: InfoComponent },
  { path: 'add', component: ModuleListComponent }
]

const dashboardChildren: Routes = [
  { path: '', redirectTo: 'summary', pathMatch: 'full' },
  { path: 'summary', component: SummaryComponent },
  { path: 'branding', component: BrandingComponent },
  { path: 'modules', component: ModulesComponent, children: modulesChildren },
  { path: 'settings', component: SettingsComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'profile', component: ProfileComponent }
]

const dashboard: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, children: dashboardChildren }
]

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'app-list', component: AppListComponent },
  { path: 'app/:url_name', component: AppComponent, children: dashboard }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
