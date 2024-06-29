// article-list.component.ts
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-article-list',
//   templateUrl: './article-list.component.html',
//   styleUrls: ['./article-list.component.css'],
//   template: `
//     <div class="article-list-container">
//       <h1>Article List</h1>
//       <div *ngFor="let article of articles">
//         <app-article-item
//           [articleName]="article.name"
//           [articleImageUrl]="article.imageUrl"
//           [articlePrice]="article.price"
//           [articleIsOnSale]="article.isOnSale"
//           [articleQuantityInCart]="article.quantityInCart"
//         ></app-article-item>
//       </div>
//     </div>
//   `,
// styles: [`
// .article-list-container {
//   text-align: center;
// }

// h1 {
//   font-family: 'Georgia', serif;
//   color: #333;
//   margin-bottom: 20px;
// }
// `]

// })
// export class ArticleListComponent {
//   articles = [
//     {
//       name: 'Mochila Porta Bebé Somomu® Rabbit Ecru - Minicoton',
//       imageUrl: '/assets/images/minicoton.jpg',
//       price: 230.99,
//       isOnSale: true,
//       quantityInCart: 0,
//     },
//     {
//       name: 'Mochila Porta Bebe Azul | Carestino Perú',
//       imageUrl: '/assets/images/ergobaby.jpeg',
//       price: 150.23,
//       isOnSale: true,
//       quantityInCart: 0,
//     },
//     {
//       name: 'Ergobaby Mochila Portabebé Original — Noari Kids',
//       imageUrl: '/assets/images/babybjorn.jpg',
//       price: 180.42,
//       isOnSale: false,
//       quantityInCart: 0,
//     },
//   ];
// }


import { Component, ChangeDetectionStrategy } from '@angular/core';
import { debounceTime, switchMap,
  distinctUntilChanged, startWith, merge,
  share } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ArticleService } from '../services/article-service';

interface ArticleWithId {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
}

interface ArticleQuantityChange {
  article: ArticleWithId;
  quantity: number;
}


@Component({
  selector: 'app-article-list',
  template:
    `
    <div class="search">
      <input
        type="text" 
        name="searchBox"
        [(ngModel)]="searchString"
        placeholder="Search Here"
        (keyup)="search()">
    </div>
    <div class="article-list-container">
    <img src='/assets/images/logo.png'>
    <div class="article-list">
      <app-article-item
      *ngFor="let article of articles$ | async"
      [article]="article"
      (quantityChange)="onQuantityChange($event)"
      (increment)="incrementQuantity($event)"
      (decrement)="decrementQuantity($event)"
      ></app-article-item>
    </div>
  </div>`,
  styles: ['.article-list-container {text-align: center;}', '.article-list {display: flex; flex-wrap: nowrap; justify-content: space-around;}']
  // templateUrl: './article-list.component.html',
  // styleUrls: ['./article-list.component.css'],
  ,
  changeDetection: ChangeDetectionStrategy.OnPush
})



export class ArticleListComponent {
  public articles$: Observable<ArticleWithId[] >;

  public searchString: string = '';
  private searchTerms: Subject<string> = new Subject();
  private reloadArticleList : Subject <void> = new Subject();

  constructor(private articleService: ArticleService) {
    this.articles$ = this.articleService.getArticles();
   }

  ngOnInit() {
    this.articles$ = this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(500),
      distinctUntilChanged(),
      merge(this.reloadArticleList),
      switchMap((q) => this.articleService.getArticles(this.searchString)));
  }

  onQuantityChange(change: ArticleQuantityChange) {
    this.articleService.changeQuantity(change.article.id, change.quantity)
      .subscribe((res) => {
        console.log(res.msg);
        this.reloadArticleList.next();
      });
  }

  incrementQuantity(article: ArticleWithId) {
    this.onQuantityChange({ article, quantity: 1 });
  }

  decrementQuantity(article: ArticleWithId) {
    if (article.quantityInCart > 0) {
      this.onQuantityChange({ article, quantity: -1 });
    }
  }
  
  search() {
    this.searchTerms.next(this.searchString);
  }
}





