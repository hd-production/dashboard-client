import { Component, OnInit } from '@angular/core';
import {createRegisterForm} from './register.form';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm = createRegisterForm();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public submit() {
    this.authService.register(this.registerForm.value)
      .subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/dashboard']);
        }
      );
  }
}
