import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-setterandgetter',
  imports: [],
  templateUrl: './setterandgetter.html',
  styleUrl: './setterandgetter.css',
})
export class Setterandgetter {
  userName = signal("Dheerendra")

  set uName(name:string){
    this.userName.set(name);
  }

  get uName(){
    return this.userName();
}
}
