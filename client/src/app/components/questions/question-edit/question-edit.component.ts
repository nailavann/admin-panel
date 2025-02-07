import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../../../services/api/question.service";
import {filter, map, Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.scss']
})
export class QuestionEditComponent implements OnInit {
  question$!: Observable<any>;


  constructor(private activatedRoute: ActivatedRoute,
              private questionService: QuestionService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.question$ = this.activatedRoute.paramMap.pipe(
      filter(params => params.has('id')),
      switchMap(params => this.questionService.getQuestion(params.get('id')!)),
      map((response) => response.data)
    );

  }

  goBack() {
    this.router.navigate(['dashboard/questions'])
  }
}
