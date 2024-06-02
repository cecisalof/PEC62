// article-new-reactive.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NameArticleValidator} from '../name-article.validator'

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css'],
})
export class ArticleNewReactiveComponent implements OnInit {
  articleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.articleForm = this.fb.group({
      name: ['', Validators.required, NameArticleValidator()],
      price: [0.1, [Validators.required, Validators.min(0.1)]],
      imageUrl: [
        '',
        [
          Validators.required,
          Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'),
        ],
      ],
      isOnSale: [false],
    });
  }

  ngOnInit() {}

  onSubmit() {
    // Marcar todos los controles como tocados
    this.markFormGroupTouched(this.articleForm);

    if (this.articleForm.valid) {
      console.log('Formulario enviado:', this.articleForm.value);
    } else {
      // Se puede agregar lógica adicional si el formulario no es válido
    }
  }

  // Marcar todos los controles del formulario como tocados
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control: any) => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
