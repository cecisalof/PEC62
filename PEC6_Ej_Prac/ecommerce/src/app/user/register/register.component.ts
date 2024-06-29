import { Component } from '@angular/core';
import { UserService } from '../../services/auth.service';
import { log } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public username: string = '';
  public password: string = '';

  public message: string = '';
  constructor(private userService: UserService) { }

  register() {
    console.log(this.username);
    console.log(this.password);
    
    
    this.userService.register(this.username, this.password)
      .subscribe((resp) => {
        console.log('Successfully registered');
        this.message = resp.msg;
      }, (err) => {
        console.error('Error registering', err);
        this.message = err.error.msg;
      });
  }
}
