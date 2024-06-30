import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStoreService } from '../services/auth-store.service';

@Injectable()

export class AuthGuard implements CanActivate {

  constructor(private userStore: UserStoreService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('AuthGuard#canActivate called');
    if (this.userStore.isLoggedIn()) {
      console.log(this.userStore);
      return true;
    } else {
      console.log('AuthGuard#canActivate not authorized to access page');
      this.router.navigate(['/login']);
      return false;
    }
  }
}