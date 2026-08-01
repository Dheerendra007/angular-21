import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {


  constructor(public route:ActivatedRoute ) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params); // { name: "John Doe", age: "30" }
      console.log(params['name']); // John Doe
      console.log(params['age']); // 30
    });
  } 
}
