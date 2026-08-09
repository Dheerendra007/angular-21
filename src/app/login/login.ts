import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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

  loginForm = new FormGroup({
    userName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    userEmail: new FormControl('',[Validators.required, Validators.email]),
    userPassword: new FormControl('',[Validators.required, Validators.minLength(6)]),
  });

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
  reset() {
    this.email.reset();
    this.password.reset();
}

handleFormSubmit() {
  console.log('Form Submitted:', this.loginForm.value);
  this.reset(); 
}

get userName() {
  return this.loginForm.get('userName');  
}
get userEmail() {
  return this.loginForm.get('userEmail');  
}
get userPassword() {
  return this.loginForm.get('userPassword');  
}

}
