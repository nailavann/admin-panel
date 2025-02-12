import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {QuestionService} from "../../../services/api/question.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../../services/api/category.service";

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  questionForm: FormGroup;
  base64Image: any;
  categories: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private questionsService: QuestionService,
    private router: Router,
    private categoryService: CategoryService
  ) {
    this.questionForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      categories: [[], [Validators.required]]
    });
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }

  onFileChange(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.base64Image = reader.result as string;
        this.questionForm.patchValue({image: this.base64Image});
      };

      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.questionForm.valid) {
      this.questionsService.postQuestion(this.questionForm.value).subscribe(() => {
        this.router.navigate(['/dashboard/questions']);
      });
    }
  }
}
