// article-new-template.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css'],
})
export class ArticleNewTemplateComponent {
  onSubmit() {
    // Validación y lógica de envío aquí
    console.log('Formulario enviado');
  }
}
