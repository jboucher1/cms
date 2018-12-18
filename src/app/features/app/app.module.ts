import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { AppListComponent } from './app-list/app-list.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TermsComponent } from './terms/terms.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [AppComponent, AppListComponent, LoginComponent, TermsComponent, ProfileComponent, LogoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    SharedModule
  ]
})
export class AppModule { }
