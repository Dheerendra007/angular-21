import { Component, signal } from '@angular/core';
import { Childcomponent } from './childcomponent/childcomponent';

@Component({
  selector: 'app-parentcomponent',
  imports: [Childcomponent],
  templateUrl: './parentcomponent.html',
  styleUrl: './parentcomponent.css',
})
export class Parentcomponent {
  users = signal(['Dheerendra','danial','peter','stark']);
  userInput = signal("enter name");
  addNewUser(){
    this.users.update((data)=>([...data,this.userInput()]))
  }
}
