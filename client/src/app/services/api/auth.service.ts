import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  login(data: any): Observable<any> {
    return this.post('/api/login', data);
  }

  logout() {
    return this.post('/api/logout');
  }
}
