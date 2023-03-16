import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

export class DataSourceProduct extends DataSource<Product>{

  data = new BehaviorSubject<Product[]>([]);

  connect(): Observable<Product[]> {
    return this.data
  }

  init(products: Product[]){
    this.data.next(products);
  }

  getTotal() {
    const products = this.data.getValue();
    return products
      .map( i => i.price )
      .reduce((price, total) => price + total, 0 );
  }

  update(id: Product['id'], change: Partial<Product>) {
    const products = this.data.getValue();
    const productIndex = products.findIndex( i => i.id === id );
    if (productIndex !== -1){
      products[productIndex] = {
        ...products[productIndex],
        ...change,
      }
      this.data.next(products);
    }
  }

  disconnect() {  }
}
