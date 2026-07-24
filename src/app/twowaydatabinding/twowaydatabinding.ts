import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-twowaydatabinding',
  imports: [],
  templateUrl: './twowaydatabinding.html',
  styleUrl: './twowaydatabinding.css',
})
export class Twowaydatabinding {
  name = signal("Dheerendra")

  userData = signal({username:"Dheerendra",age:"32",email:"d@test.com"})

  updateUser(key:string, val:string){
     this.userData.update((item)=>({...item,[key]:val}))
  }
}
