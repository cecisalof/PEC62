// navbar.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/auth.service';
import { UserStoreService } from '../../services/auth-store.service';


@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [RegisterComponent], 
  providers: [UserService, UserStoreService],
})
export class RegisterModule {}
