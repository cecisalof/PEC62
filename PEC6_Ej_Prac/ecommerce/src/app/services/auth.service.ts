import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserStoreService } from './auth-store.service';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private userStore: UserStoreService) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post('/api/user/login', {
      username: username,
      password: password
    }).pipe(map((resp: any) => {
      this.userStore.token = resp.token;
      console.log(resp.token);
      
      return resp;
    }));
  }

  register(username: string, password: string): Observable<any> {
    console.log(this.http);
    
    return this.http.post('/api/user/register', {
      username: username,
      password: password
    });
  }
}
