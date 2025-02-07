import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private _user: User | null = null;

  get user(): User | null {
    return this._user;
  }

  set user(newValue: any) {
    this._user = {...this._user, ...newValue};
  }

  reset() {
    this._user = null;
  }
}

interface User {
  name: string,
  email: string,
  type: string,
  id: number
}
