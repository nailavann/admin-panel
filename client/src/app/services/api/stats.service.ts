import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StatsService extends BaseService{

  getStats(): Observable<any>{
    return this.get('/api/stats');
  }
}
