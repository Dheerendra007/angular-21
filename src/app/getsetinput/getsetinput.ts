import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-getsetinput',
  imports: [],
  templateUrl: './getsetinput.html',
  styleUrl: './getsetinput.css',
})
export class Getsetinput {
  name:WritableSignal<string> = signal('Add my name')

  updateValue(value: string) {
   this.name.set((value))
  }
  resetValue() {
    this.name.set('Add my name')
  }
}
