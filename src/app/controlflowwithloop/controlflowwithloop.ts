import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-controlflowwithloop',
  imports: [],
  templateUrl: './controlflowwithloop.html',
  styleUrl: './controlflowwithloop.css',
})
export class Controlflowwithloop {
  userList = signal(["Dheerendra","Thomas","Simon","Stark"])
  userDetails = signal([
    {id:1, name:"Dheerendra",emil:"Dheerendra@test.com"},
    {id:1, name:"Thomas",emil:"Thomas@test.com"},
    {id:1, name:"Simon",emil:"Simon@test.com"},
    {id:1, name:"Stark",emil:"Stark@test.com"}
  ])
}
