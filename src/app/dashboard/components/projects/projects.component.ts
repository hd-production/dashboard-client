import { Component, OnInit } from '@angular/core';
import {AddProjectComponent} from './add-project/add-project.component';
import {MatDialog} from '@angular/material';
import {ProjectsService} from '../../services/projects.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';
import {Project} from '../../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  private projectsSubject = new Subject<Project[]>();
  public projectsObservable = this.projectsSubject.asObservable();

  constructor(
    private dialog: MatDialog,
    private projectService: ProjectsService
  ) { }

  ngOnInit() {
    this.projectService.find()
      .subscribe(projects => this.projectsSubject.next(projects));
  }

  public addProject(): void {
    const dialogRef = this.dialog.open(AddProjectComponent);
    dialogRef.afterClosed().subscribe((data) => {
      if (!data) {
        return;
      }

      this.projectService.create(data).pipe(
        switchMap(() => this.projectService.find())
      )
        .subscribe(data2 => this.projectsSubject.next(data2));
    });
  }
}
