import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddProjectComponent} from './add-project/add-project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

  public addProject() {
  }

}
