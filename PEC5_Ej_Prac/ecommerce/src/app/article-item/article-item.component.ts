// article-item.component.ts

import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

interface Article extends ArticleWithId {
  name: string;
  imageUrl: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
}

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
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css'],
  // The strategy that the default change detector uses to detect changes. When set, takes effect the next time change detection is triggered.
  changeDetection: ChangeDetectionStrategy.OnPush, // sets the strategy to CheckOnce (on demand). CheckOnce, implies that change detection is skipped unless a component is marked as dirty, then checked once, and then skipped again.
})

export class ArticleItemComponent {
  @Input() article: Article = {
    id: 0,
    name: '',
    imageUrl: '',
    price: 0,
    isOnSale: false,
    quantityInCart: 0,
  };

  @Output() quantityChange = new EventEmitter<ArticleQuantityChange>();
  @Output() increment = new EventEmitter<ArticleWithId>();
  @Output() decrement = new EventEmitter<ArticleWithId>();

  // incrementQuantity() {
  //   this.article.quantityInCart++;
  //   this.emitQuantityChange();
  // }

  // decrementQuantity() {
  //   if (this.article.quantityInCart > 0) {
  //     this.article.quantityInCart--;
  //     this.emitQuantityChange();
  //   }
  // }

  incrementQuantity() {
    this.increment.emit(this.article);
  }

  decrementQuantity() {
    this.decrement.emit(this.article);
  }

  private emitQuantityChange() {
    const change: ArticleQuantityChange = {
      article: this.article,
      quantity: this.article.quantityInCart,
    };
    this.quantityChange.emit(change);
  }

  isAvailableForSale() {
    return this.article.isOnSale;
  }

  isQuantity() {
    return this.article.quantityInCart > 0;
  }
}


