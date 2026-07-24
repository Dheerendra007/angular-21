import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-switchstatement',
  imports: [],
  templateUrl: './switchstatement.html',
  styleUrl: './switchstatement.css',
})
export class Switchstatement {
  status = signal('success');
  handelStatus(event:Event){
    const target = event.target as HTMLSelectElement
    this.status.set(target.value)

  }
}
