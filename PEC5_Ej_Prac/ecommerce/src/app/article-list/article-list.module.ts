// article-list.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list.component';
import { ArticleItemModule } from '../article-item/article-item.module';
import { FormsModule } from '@angular/forms'; // Import FormsModule here

@NgModule({
  declarations: [ArticleListComponent],
  imports: [CommonModule, ArticleItemModule,  FormsModule],
  exports: [ArticleListComponent],
})
export class ArticleListModule {}
