import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

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
