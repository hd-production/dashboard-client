import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  public getUser(): void {
    this.userService.getCurrentUser()
      .subscribe(user => console.log(user));
  }

  public testJwt(): void {
    console.log(this.authService.isTokenValid());
  }
}
