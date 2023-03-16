import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

export class DataSourceProduct extends DataSource<Product>{

  data = new BehaviorSubject<Product[]>([]);
  originalData: Product[] = [];

  connect(): Observable<Product[]> {
    return this.data
  }

  init(products: Product[]){
    this.originalData = products;
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
    if (productIndex !== -1 ){
      products[productIndex] = {
        ...products[productIndex],
        ...change,
      }
      this.data.next(products);
    }
  }

  find( query: string ){
    const newProduct = this.originalData
    .filter( i => {
      const word = `${i.id}-${i.title}-${i.price}`;
      return word.toLowerCase().includes(query.toLowerCase());
    });
    return this.data.next(newProduct);
  }

  disconnect() {  }
}
