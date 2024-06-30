import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  public username: string = '';
  public password: string = '';

  public message: string = '';

  constructor(private userService: UserService,
    private router: Router, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  ngOnInit() { }

  register() {
    console.log('this.loginForm.value', this.registerForm.value);
    this.userService.register(this.registerForm.value.username, this.registerForm.value.password)
      .subscribe((resp) => {
        console.log('Successfully registered');
        this.message = resp.msg;
        // Navigate to a path using the Router
        this.router.navigate(['login']);
      }, (err) => {
        console.error('Error registering', err);
        this.message = err.error.msg;
      });
  }
}
