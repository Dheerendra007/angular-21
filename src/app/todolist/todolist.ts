import { HttpInterceptor } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-todolist',
  imports: [],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css',
})
export class Todolist {
  titel = signal('')
  tasks = signal([
    {id: 0, title:"Team lunch", completed:false}
  ])

  addTask(event:Event){
    val = event.target as HttpInterceptor
    this.tasks.update(event.target)
  }
}
