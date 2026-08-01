import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import { Signal } from "./signal/signal";
import { Signaldatatype } from "./signaldatatype/signaldatatype";
import { Counterapp } from "./counterapp/counterapp";
import { Getsetinput } from "./getsetinput/getsetinput";
import { Styling } from "./styling/styling";
import { Controlflowstatement } from "./controlflowstatement/controlflowstatement";
import { Controlflowwithloop } from "./controlflowwithloop/controlflowwithloop";
import { Switchstatement } from "./switchstatement/switchstatement";
import { Twowaydatabinding } from "./twowaydatabinding/twowaydatabinding";
import { Setterandgetter } from "./setterandgetter/setterandgetter";
import { Todolist } from "./todolist/todolist";
import { Directives } from "./directives/directives";
import { Parentcomponent } from "./parentcomponent/parentcomponent";
import { DisplayCount } from "./display-count/display-count";
import { ControlCount } from "./control-count/control-count";
import { Pipe } from "./pipe/pipe"; 
import { TrimTextPipePipe } from './custom-pipe/trim-text-pipe-pipe';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { About } from './pages/about/about';
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Signup, Signal, Signaldatatype,
    Counterapp, Getsetinput, Styling, Controlflowstatement, Controlflowwithloop,
    Switchstatement, Twowaydatabinding, Setterandgetter, Todolist, Directives,
    Parentcomponent, DisplayCount, ControlCount, Pipe, Home, Login, Profile, About, RouterLinkWithHref, Header],
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
