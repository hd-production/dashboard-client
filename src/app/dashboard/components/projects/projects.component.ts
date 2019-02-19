import { Component, OnInit } from '@angular/core';
import {AddProjectComponent} from './add-project/add-project.component';
import {MatDialog} from '@angular/material';
import {ProjectsService} from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private projectService: ProjectsService
  ) { }

  ngOnInit() {
  }

  public addProject(): void {
    const dialogRef = this.dialog.open(AddProjectComponent);
    dialogRef.afterClosed().subscribe((data) => {
      if (!data) {
        console.log('closed without data');
        return;
      }

      this.projectService.create(data)
        .subscribe(() => {});
    });
  }
}
