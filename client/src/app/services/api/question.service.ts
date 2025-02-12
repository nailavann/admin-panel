import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends BaseService {

  getAllQuestions(page: number): Observable<any> {
    return this.get('/api/questions', {page});
  }

  getQuestion(id: string): Observable<any> {
    return this.get(`/api/question/${id}`);
  }

  postQuestion(data: {}): Observable<any> {
    return this.post(`/api/question`, data);
  }
}
