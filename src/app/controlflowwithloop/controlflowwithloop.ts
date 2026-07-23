import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-controlflowwithloop',
  imports: [],
  templateUrl: './controlflowwithloop.html',
  styleUrl: './controlflowwithloop.css',
})
export class Controlflowwithloop {
  userList = signal(["Dheerendra","Thomas","Simon","Stark"])
}
