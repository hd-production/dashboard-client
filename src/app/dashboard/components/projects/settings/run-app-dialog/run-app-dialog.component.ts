import { Component, OnInit } from '@angular/core';
import {DeploymentType} from '../deployment-type.enum';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-run-app-dialog',
  templateUrl: './run-app-dialog.component.html',
  styleUrls: ['./run-app-dialog.component.scss']
})
export class RunAppDialogComponent implements OnInit {

  public cloudValue = DeploymentType.CLOUD;
  public selfHostValue = DeploymentType.SELF_HOST;

  public selectedDeploymentType: keyof DeploymentType;

  constructor(
    private dialog: MatDialogRef<RunAppDialogComponent>
  ) { }

  ngOnInit() {
  }

  public submit() {
    this.dialog.close(this.selectedDeploymentType);
  }

}
