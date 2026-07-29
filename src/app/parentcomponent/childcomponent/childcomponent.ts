import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  imports: [],
  templateUrl: './childcomponent.html',
  styleUrl: './childcomponent.css',
})
export class Childcomponent {
  @Input() userName:string|undefined
  @Output() selectedUser = new EventEmitter()
  @Output() deleteUser = new EventEmitter()

  whichUser(name:string|undefined){
    //console.log(name);
    this.selectedUser.emit(name)
    
  }
   delete(name:string|undefined){
    this.deleteUser.emit(name)
    
  }
}
