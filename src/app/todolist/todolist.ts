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
    { id: 0, title: "Team lunch", completed: false }
  ])

  addTask() {
    if (this.titel())
      this.tasks.update((item) => (
        [...item, { id: this.tasks().length, title: this.titel(), completed: false }]
      ))
    this.titel.set('');
  }

  deleteTask(id: number) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id != id))
  }
}
