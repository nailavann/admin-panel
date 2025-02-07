import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Observable, tap} from "rxjs";
import {UserStateService} from "../user-state.service";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(private userService: UserStateService) {
    super();
  }

  fetchUser(): Observable<any> {
    return this.get('/api/user');
  }

  getAllUsers(page: number): Observable<any> {
    return this.get('/api/all-users', {page});
  }

  getUserById(id: string): Observable<any> {
    return this.get(`/api/user-by-id/${id}`);

  }

}
