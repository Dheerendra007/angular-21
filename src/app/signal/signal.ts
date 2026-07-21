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

  constructor() {
  effect(() => {
    console.log('Count Signal:', this.count())
    console.log('Count data:', this.data)
  });
  }
  dataCounter() {
    this.data += 1
  }

  signalCounter() {
    this.count.set(this.count() + 1)
    console.log('Count Signal:', this.count())
  }
  
}
