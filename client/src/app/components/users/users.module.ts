import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from "./users.component";
import {RouterModule, Routes} from "@angular/router";
import {MatPaginatorModule} from "@angular/material/paginator";
import {SharedModule} from "../../pipes/shared/shared.module";
import {UserEditComponent} from './user-edit/user-edit.component';

const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'edit/:id', component: UserEditComponent},
];

@NgModule({
  declarations: [UsersComponent, UserEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatPaginatorModule,
    SharedModule,
  ]
})
export class UsersModule {
}
