import { Component } from '@angular/core';
import { Childcomponent } from './childcomponent/childcomponent';

@Component({
  selector: 'app-parentcomponent',
  imports: [Childcomponent],
  templateUrl: './parentcomponent.html',
  styleUrl: './parentcomponent.css',
})
export class Parentcomponent {}
