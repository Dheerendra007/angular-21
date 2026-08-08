import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  count = 0;
  email = new FormControl("")
  password = new FormControl("")

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

  handelEvent(event: String) {
    console.log('Event:', event);
  }
  login() {
    console.log('Email:', this.email.value);
    console.log('Password:', this.password.value);
  }
}
