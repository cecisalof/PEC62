// article-item.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from './article-item.component';
import { ImageArticlePipe } from '../pipes/image-article-pipe';

@NgModule({
  declarations: [ArticleItemComponent, ImageArticlePipe],
  imports: [CommonModule],
  exports: [ArticleItemComponent, CommonModule],
})
export class ArticleItemModule {}
