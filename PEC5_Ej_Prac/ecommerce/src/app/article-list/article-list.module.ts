// article-list.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list.component';
import { ArticleItemModule } from '../article-item/article-item.module';

@NgModule({
  declarations: [ArticleListComponent],
  imports: [CommonModule, ArticleItemModule],
  exports: [ArticleListComponent],
})
export class ArticleListModule {}
