import { Component, OnInit } from '@angular/core';
import {Project} from '../../../models/project';
import {ProjectsService} from '../../../services/projects.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material';
import {GetPluginScriptDialogComponent} from './get-plugin-script-dialog/get-plugin-script-dialog.component';
import {RunAppDialogComponent} from './run-app-dialog/run-app-dialog.component';

const EMPTY_ADMIN_SETTINGS = {firstName: '', lastName: '', email: ''};

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public project: Project;

  constructor(
    private readonly projectsService: ProjectsService,
    private readonly route: ActivatedRoute,
    private readonly dialog: MatDialog,
  ) { }

  ngOnInit() {
    const projectId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.projectsService.get(projectId)
      .subscribe(p => {
        // TODO: remove interpolation when API will be fixed
        this.project = { defaultAdminSettings: EMPTY_ADMIN_SETTINGS, modules: [],  ...p};
      });
  }

  public runApp() {
    this.dialog.open(RunAppDialogComponent);
  }

  public getPluginScript() {
    this.dialog.open(GetPluginScriptDialogComponent);
  }
}
