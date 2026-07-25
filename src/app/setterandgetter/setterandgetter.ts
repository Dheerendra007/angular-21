import { Component, signal } from '@angular/core';
import { UserData } from '../styling/user-data/user-data';

@Component({
  selector: 'app-setterandgetter',
  imports: [],
  templateUrl: './setterandgetter.html',
  styleUrl: './setterandgetter.css',
})
export class Setterandgetter {
  userName = signal("Dheerendra")
  userData = signal({colloage:"abc",email:"dk@test.com"})

  set uName(name:string){
    this.userName.set(name);
  }

  get uName(){
    return this.userName();
}

 get studentClg(){
  return this.userData().colloage;
}

set studentClg(studentCollage){
  this.userData.update((item)=>({...item,colloage:studentCollage }));
}
}
