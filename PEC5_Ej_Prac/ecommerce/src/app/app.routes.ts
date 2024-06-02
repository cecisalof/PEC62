// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';


export const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'articles', component: ArticleListComponent },
  { path: 'new-template', component: ArticleNewTemplateComponent },
  { path: 'new-reactive', component: ArticleNewReactiveComponent },
];
