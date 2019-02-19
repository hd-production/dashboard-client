import {Component, Input, OnInit} from '@angular/core';
import {ProjectsListDataSource} from './projects-list-datasource';
import {Observable} from 'rxjs';
import {Project} from '../../../models/project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  dataSource: ProjectsListDataSource;
  @Input()
  public projectsObservable: Observable<Project[]>;

  constructor() {}

  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ProjectsListDataSource(this.projectsObservable);
  }
}
