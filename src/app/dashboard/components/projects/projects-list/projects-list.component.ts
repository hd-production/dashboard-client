import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import {ProjectsService} from '../../../services/projects.service';
import {ProjectsListDataSource} from './projects-list-datasource';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ProjectsListDataSource;

  constructor(
    private projectService: ProjectsService
  ) {}

  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ProjectsListDataSource(this.paginator, this.sort, this.projectService);
  }
}
