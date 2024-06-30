import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  public username: string = '';
  public password: string = '';

  public message: string = '';

  constructor(private userService: UserService,
    private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {}

  login() {
    console.log('this.loginForm.value', this.loginForm.value);
    
    this.userService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe((resp) => {
        console.log('Successfully logged in');
        this.message = resp.msg;
        // Navigate to a path using the Router
        this.router.navigate(['articles']);
      }, (err) => {
        console.error('Error logging in', err);
        this.message = err.error.msg;
      });
  }
}

