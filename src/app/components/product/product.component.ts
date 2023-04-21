import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [],
})
export class ProductComponent {
  productId:any
  product:any

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {
    this.productId = this._activatedRoute.snapshot.paramMap.get('id');
    // this.product=_productService.getProduct(this.productId)
  }

  ngOnInit() {
    this.productId = this._activatedRoute.snapshot.paramMap.get('id');
    console.log(this.productId);
    this.product=this._productService.getProduct(this.productId)
  }
}
