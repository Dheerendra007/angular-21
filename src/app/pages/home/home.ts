import { Component, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Dynamicloading } from '../dynamicloading/dynamicloading';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterModule,Dynamicloading],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
@ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;


  userData = signal({
    name: 'John Doe',
    age: 30,
    id: 1
  });
  constructor(public router: Router) { }
  goToAboutPage() {
    
    this.router.navigate(['/about', this.userData().name], {
      queryParams: {
        name: this.userData().name,
        age: this.userData().age,
        id: this.userData().id
      }
    });
  }
  async loadDynamicComponent() {
    this.container.clear();
    //const { DynamicComponent } = await import('./dynamicloading/dynamicloading');
    const { Dynamicloading } = await import('../dynamicloading/dynamicloading');
    this.container.createComponent(Dynamicloading);

  }

  goToProductPage() {
    
    this.router.navigate(['/products']);
  }
}
