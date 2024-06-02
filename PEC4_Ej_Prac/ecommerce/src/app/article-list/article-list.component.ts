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


import { Component } from '@angular/core';

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
    `<div class="article-list-container">
    <img src='/assets/images/logo.png'>
    <div class="article-list">
      <app-article-item
      *ngFor="let article of articles"
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
})
export class ArticleListComponent {
  articles: ArticleWithId[] = [
    {
      id: 1,
      name: 'Chai Latte',
      imageUrl: '/assets/images/chai-latte.png',
      price: 4.5,
      isOnSale: true,
      quantityInCart: 0,
    },
    {
      id: 2,
      name: 'Matcha Latte',
      imageUrl: '/assets/images/matcha-latte.png',
      price: 5.5,
      isOnSale: true,
      quantityInCart: 0,
    },
    {
      id: 3,
      name: 'Expresso',
      imageUrl: '/assets/images/expresso.png',
      price: 3.5,
      isOnSale: false,
      quantityInCart: 0,
    },
  ];

  onQuantityChange(change: ArticleQuantityChange) {
    const articleToUpdate = this.articles.find(a => a.id === change.article.id);

    if (articleToUpdate) {
      articleToUpdate.quantityInCart += change.quantity;
    }

    console.log(`Article: ${change.article.name}, Quantity: ${change.article.quantityInCart}`);
  }

  incrementQuantity(article: ArticleWithId) {
    this.onQuantityChange({ article, quantity: 1 });
  }

  decrementQuantity(article: ArticleWithId) {
    if (article.quantityInCart > 0) {
      this.onQuantityChange({ article, quantity: -1 });
    }
  }
}





