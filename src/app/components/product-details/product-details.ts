import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../services/products';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-details',
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatSlideToggle],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  productValue = signal<any>(null);
  constructor(private route: ActivatedRoute, private productService: Products) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe((data) => {
      const product = data.find((p) => p.id === Number(id));
      console.log(product);
      this.productValue.set(product?.title || 'Product not found');
    });
  }


}
