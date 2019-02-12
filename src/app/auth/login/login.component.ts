import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {createLoginForm} from './login.form';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = createLoginForm();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public submit(): void {
    this.authService.login(this.loginForm.value)
      .subscribe(
        () => {
          console.log('logged in');
          this.router.navigate(['/dashboard']);
        }
      );
  }
}
