import { UsersService } from './services/users/users.service';
import { FeaturesModule } from './features/features.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';


@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    RootRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FeaturesModule,
    HttpClientModule,
    MatSnackBarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [UsersService],
  bootstrap: [RootComponent]
})
export class RootModule { }
