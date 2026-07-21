import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counterapp',
  imports: [],
  templateUrl: './counterapp.html',
  styleUrl: './counterapp.css',
})
export class Counterapp {
  count: WritableSignal<number> = signal(0)
  color = "red"

  increment() {
    if (this.count() < 40) {
      this.color = "green"
    }else{
      this.color = "pink"
    }
    this.count.set(this.count() + 10)
  }

  decrement() {
     if (this.count() > 50) {
      this.color = "pink"
    }else{
      this.color = "green"
    }
    if (this.count() > 0) {
    this.count.set(this.count() - 10)
    }
  }

  reset() {
    this.count.set(0)
  }
}
