import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../../services/api/category.service";

@Component({
  selector: 'app-categories-data',
  templateUrl: './categories-data.component.html',
  styleUrls: ['./categories-data.component.scss']
})
export class CategoriesDataComponent implements OnInit {
  categoryWithQuestions: any[] = [];
  id: string = "1";

  constructor(private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((value) => {
      if (value.has('id')) {
        this.id = value.get('id')!;
        this.categoryService.getCategoryWithQuestions(value.get('id')!).subscribe((response) => {
          this.categoryWithQuestions = response.data;
        })
      }
    });
  }

}
