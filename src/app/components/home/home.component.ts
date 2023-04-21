import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  products: any;

  constructor(private _productService: ProductService) {
    this.products = _productService.getProducts();
  }
}
