import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [SummaryComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NgxChartsModule
  ]
})
export class SummaryModule { }
