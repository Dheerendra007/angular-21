import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
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

}
