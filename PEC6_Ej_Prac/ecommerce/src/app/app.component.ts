import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import { ArticleItemModule } from './article-item/article-item.module';
// import { ArticleListModule } from './article-list/article-list.module';
// import { NavbarModule } from './navbar/navbar.module';
// import { ArticleNewTemplateModule } from './article-new-template/article-new-template.module'
// import { ArticleNewReactiveModule } from './article-new-reactive/article-new-reactive.module'

import { AppModule } from "./app.module";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    AppModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
