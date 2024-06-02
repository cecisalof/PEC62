/* Archivos relacionados con el componente principal de la aplicación. */ 
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ArticleItemModule } from './article-item/article-item.module';
import { ArticleListModule } from './article-list/article-list.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ArticleItemModule, ArticleListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
