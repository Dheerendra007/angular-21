import { Component, signal } from '@angular/core';
import { Childcomponent } from './childcomponent/childcomponent';
import { single } from 'rxjs';

@Component({
  selector: 'app-parentcomponent',
  imports: [Childcomponent],
  templateUrl: './parentcomponent.html',
  styleUrl: './parentcomponent.css',
})
export class Parentcomponent {
  users = signal(['Dheerendra','danial','peter','stark'])
  userInput = signal("enter name")
  selectedUserName = signal('')
  addNewUser(){
    this.users.update((data)=>([...data,this.userInput()]))
  }

  selectedUser(name:string){ 
    //console.log(name)
    this.selectedUserName.set(name)
  }

   deleteUser(name:string){ 
    console.log(name)
    this.users.update((data)=>data.filter((item)=>item!=name))
  }
}
