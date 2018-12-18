import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesComponent } from './modules/modules.component';
import { RouterModule } from '@angular/router';
import { ModulesEmptyComponent } from './modules-empty/modules-empty.component';
import { MatListModule, MatIconModule, MatButtonModule } from '@angular/material';
import { ModuleListComponent } from './module-list/module-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [ModulesComponent, ModulesEmptyComponent, ModuleListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    DragDropModule
  ]
})
export class ModulesModule { }
