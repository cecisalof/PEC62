import { Injectable } from '@angular/core';

@Injectable()
export class UserStoreService {

  private _token: string = null as any;
  constructor() { }

  set token(token: string) {
    this._token = token;
  }

  get token() {
    return this._token;
  }

  isLoggedIn() {
    return this.token != null;
  }

}
