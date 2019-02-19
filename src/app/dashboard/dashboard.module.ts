import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import { ProjectsListComponent } from './components/projects/projects-list/projects-list.component';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';
import { AddProjectComponent } from './components/projects/add-project/add-project.component';
import {ProjectsService} from './services/projects.service';
import {ReactiveFormsModule} from '@angular/forms';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule
  ],
  declarations: [
    DashboardComponent,
    ProjectsListComponent,
    AddProjectComponent,
    ProjectsComponent
  ],
  entryComponents: [
    AddProjectComponent
  ],
  providers: [
    ProjectsService
  ]

})
export class DashboardModule { }
