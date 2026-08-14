import { Component, signal } from '@angular/core';
import { ProductAPI } from '../../interfaces/product-api';
import { Products } from '../../services/products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productsData = signal<ProductAPI[]>([]);
  constructor(private productService: Products) { }
  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      console.log(data);
      this.productsData.set(data);
    });
  }
}
