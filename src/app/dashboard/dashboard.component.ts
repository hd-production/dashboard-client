import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public displayPlugin = false;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  public getUser(): void {
    this.userService.getCurrentUser()
      .subscribe(user => console.log(user));
  }

  toggle() {
    this.displayPlugin = !this.displayPlugin;
  }
}
