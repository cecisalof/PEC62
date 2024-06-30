import { Component, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ArticleItemModule } from './article-item/article-item.module';
import { ArticleListModule } from './article-list/article-list.module';
import { NavbarModule } from './navbar/navbar.module';
import { ArticleNewTemplateModule } from './article-new-template/article-new-template.module'
import { ArticleNewReactiveModule } from './article-new-reactive/article-new-reactive.module'
import { FormsModule } from '@angular/forms';
import { UserService } from './services/auth.service';
import { UserStoreService } from './services/auth-store.service';
import { LoginModule } from './user/login/login.module';
import { RegisterModule } from './user/register/register.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    ArticleItemModule,
    ArticleListModule,
    NavbarModule,
    FormsModule,
    ArticleNewTemplateModule,
    ArticleNewReactiveModule,
    LoginModule,
    RegisterModule
  ],
  providers: [UserService, UserStoreService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // private userService = inject(UserService);
  title = 'ecommerce';
}
