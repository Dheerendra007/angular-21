import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  data = 10
  count = signal(10)
  speed = signal(0)
  color = "red"

  constructor() {
  effect(() => {
    console.log('Count Signal:', this.count())
    console.log('Count data:', this.data)
    console.log('Speed Signal:', this.speed())
    if (this.speed() > 50) {
      this.color = "green"
    } else {
      this.color = "red"
    }
    console.log('speed:', this.speed())
  });
  }
  dataCounter() {
    this.data += 1
  }

  signalCounter() {
    this.count.set(this.count() + 1)
    console.log('Count Signal:', this.count())
  }

  updateSpeed() {
    this.speed.set(this.speed() + 10)
  }

}
