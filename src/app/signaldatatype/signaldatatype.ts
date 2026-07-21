import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signaldatatype',
  imports: [],
  templateUrl: './signaldatatype.html',
  styleUrl: './signaldatatype.css',
})
export class Signaldatatype {
  userName:WritableSignal<string[]> = signal(['Dheerendra','John','Smith'])

  updateUserName() {
    this.userName.update((value) => [...value, 'New User'])
    console.log('Updated User Name:', this.userName())
  }
}
