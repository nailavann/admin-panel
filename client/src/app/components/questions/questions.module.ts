import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {QuestionsComponent} from "./questions.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ShortenPipe} from "../../pipes/shorten.pipe";
import {QuestionEditComponent} from './question-edit/question-edit.component';
import {SharedModule} from "../../pipes/shared/shared.module";

const routes: Routes = [
  {path: '', component: QuestionsComponent},
  {path: 'edit/:id', component: QuestionEditComponent},
];

@NgModule({
  declarations: [QuestionsComponent, QuestionEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatPaginatorModule,
    SharedModule
  ]
})
export class QuestionsModule {
}
