import { Component,signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-controlflowstatement',
  imports: [],
  templateUrl: './controlflowstatement.html',
  styleUrl: './controlflowstatement.css',
})
export class Controlflowstatement {
  isLoggedIn = signal(true)
  isStatus = signal(true);
  statusStr=signal('Progress');

  handelLogin(loginStatus:boolean) {
    this.isLoggedIn.set(loginStatus)
  }
  handleStatus(event:Event) {
    if (event.target instanceof HTMLSelectElement) {
      const status = event.target.value;
      this.statusStr.set(status);
    }
  }

}
