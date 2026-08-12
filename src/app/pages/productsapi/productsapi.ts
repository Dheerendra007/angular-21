import { Component, signal } from '@angular/core';
import { Products } from '../../services/products';

@Component({
  selector: 'app-productsapi',
  imports: [],
  templateUrl: './productsapi.html',
  styleUrl: './productsapi.css',
})
export class Productsapi {
  productsData = signal<any[]>([]);
  constructor(private productService: Products) { }
  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      console.log(data);
      this.productsData.set(data);
    });
  }
}
