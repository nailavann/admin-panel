import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService {

  getCategories(): Observable<any> {
    return this.get('/api/categories');
  }

  getCategoryWithQuestions(id: string): Observable<any> {
    return this.get(`/api/category-with-questions/${id}`)
  }
}
