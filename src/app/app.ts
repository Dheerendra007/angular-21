import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import { Signal } from "./signal/signal";
import { Signaldatatype } from "./signaldatatype/signaldatatype";
import { Counterapp } from "./counterapp/counterapp"; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Signup, Signal, Signaldatatype, Counterapp],
  templateUrl: './app.html',
  /*template: `
  <h1>{{name}}</h1>
  <h1>{{title()}}</h1>
  <h2>Welcome to {{name}}!</h2>
  <h3>Sum of 10 and 20 is {{getAddition(10, 20)}}</h3>
  `,*/
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-21');
  name = 'Angular 21';
  getAddition(a:number, b:number): number {
    return a + b;
  }

  number = 10;
   showEvent(event: MouseEvent | PointerEvent | Event) {
    console.log('Event:', event);
  }
}
