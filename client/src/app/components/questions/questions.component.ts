import {Component, OnInit} from '@angular/core';
import {QuestionService} from "../../services/api/question.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions: any[] = [];
  length = 0;
  pageSize = 20;
  pageIndex = 0;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.fetchQuestions(1);
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.fetchQuestions(this.pageIndex + 1);
  }


  fetchQuestions(page: number) {
    console.log('question calıstı');
    this.questionService.getAllQuestions(page).subscribe((response) => {
      this.questions = response.data;
      this.length = response.meta.total;
      this.pageSize = response.meta.per_page;
      this.pageIndex = response.meta.current_page - 1;
    });
  }

}
