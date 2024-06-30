// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
// import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { RegisterComponent } from "./user/register/register.component";
import { LoginComponent } from "./user/login/login.component";
// import { AuthGuard } from './guards/auth.guard';



export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'article/list', component: ArticleListComponent },
  // { path: 'new-template', component: ArticleNewTemplateComponent },
  { path: 'article/create', component: ArticleNewReactiveComponent},
];
