// navbar.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/auth.service';
import { UserStoreService } from '../../services/auth-store.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [LoginComponent], 
  providers: [UserService, UserStoreService],
})
export class LoginModule {}
