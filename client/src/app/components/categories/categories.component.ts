import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/api/category.service";
import {map} from "rxjs";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().pipe(
      map((response) => response.data)
    ).subscribe((response) => {
      this.categories = response;
    })
  }

}
