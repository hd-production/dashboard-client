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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProjectsComponent } from './components/projects/projects.component';
import { SettingsComponent } from './components/projects/settings/settings.component';
import { RunAppDialogComponent } from './components/projects/settings/run-app-dialog/run-app-dialog.component';
import { GetPluginScriptDialogComponent } from './components/projects/settings/get-plugin-script-dialog/get-plugin-script-dialog.component';

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
    MatToolbarModule,
    FormsModule,
  ],
  declarations: [
    DashboardComponent,
    ProjectsListComponent,
    AddProjectComponent,
    ProjectsComponent,
    SettingsComponent,
    RunAppDialogComponent,
    GetPluginScriptDialogComponent,
  ],
  entryComponents: [
    AddProjectComponent,
    GetPluginScriptDialogComponent,
    RunAppDialogComponent,
  ],
  providers: [
    ProjectsService,
  ]

})
export class DashboardModule { }
