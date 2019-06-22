import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public downloadLink = null;

  constructor() { }

  ngOnInit() {
  }

  build() {
    // this.inviteUserService.invite({
    //   email: this.userEmail,
    //   firstName: this.firstName,
    //   lastName: this.lastName,
    //   role: this.role
    // }).subscribe(() => {
    //   console.log('user invited ');
    // });
  }
}
