import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {AuthService} from '../services/auth.service';
import {AddProjectComponent} from './components/projects/add-project/add-project.component';
import {MatDialog} from '@angular/material';
import {ProjectsService} from './services/projects.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private dialog: MatDialog,
    private projectService: ProjectsService
  ) { }

  ngOnInit() {
  }

  public getUser(): void {
    this.userService.getCurrentUser()
      .subscribe(user => console.log(user));
  }

  public addProject(): void {
    const dialogRef = this.dialog.open(AddProjectComponent);
    dialogRef.afterClosed().subscribe((data) => {
      if (!data) {
        console.log('closed without data');
      }

      this.projectService.create(data)
        .subscribe(() => {});
    });
  }
}
