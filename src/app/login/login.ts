import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  count = 0;
  callLogin(action:String) {
    if(action === 'minus') {
      if(this.count  ==0) {
      this.alertCount();
      }
     this.count>0 && this.count--;
    }else{
this.count++;
    }
    
  }
  alertCount() {
    alert(`Current count is not leess than 0: ${this.count}`);
  }
}
