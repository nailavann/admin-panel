import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {QuestionsComponent} from "./questions.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {QuestionEditComponent} from './question-edit/question-edit.component';
import {SharedModule} from "../../pipes/shared/shared.module";
import { AddQuestionComponent } from './add-question/add-question.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";

const routes: Routes = [
  {path: '', component: QuestionsComponent},
  {path: 'add-question', component: AddQuestionComponent},
  {path: 'edit/:id', component: QuestionEditComponent},
];

@NgModule({
  declarations: [QuestionsComponent, QuestionEditComponent, AddQuestionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatPaginatorModule,
    SharedModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class QuestionsModule {
}
