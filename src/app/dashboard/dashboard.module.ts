import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsListComponent } from './components/projects/projects-list/projects-list.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: [
    DashboardComponent,
    ProjectsComponent,
    ProjectsListComponent
  ]
})
export class DashboardModule { }
