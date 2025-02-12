import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CategoriesComponent} from "./categories.component";
import {CategoriesDataComponent} from "./categories-data/categories-data.component";


const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    children: [
      {
        path: ':id',
        component: CategoriesDataComponent,

      }
    ]
  }
];


@NgModule({
  declarations: [CategoriesComponent, CategoriesDataComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoriesModule {
}
