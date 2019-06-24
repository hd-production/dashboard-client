import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from './models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public user: User;
  public displayPlugin = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getCurrentUser()
      .subscribe(user => {
        this.user = user;
      });
  }

  toggle() {
    this.displayPlugin = !this.displayPlugin;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['auth/login']);
  }
}
