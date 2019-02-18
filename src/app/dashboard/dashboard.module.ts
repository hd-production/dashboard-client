import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsListComponent } from './components/projects/projects-list/projects-list.component';
import {MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule} from '@angular/material';
import { AddProjectComponent } from './components/projects/add-project/add-project.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule
  ],
  declarations: [
    DashboardComponent,
    ProjectsComponent,
    ProjectsListComponent,
    AddProjectComponent
  ],
  entryComponents: [
    AddProjectComponent
  ]
})
export class DashboardModule { }
