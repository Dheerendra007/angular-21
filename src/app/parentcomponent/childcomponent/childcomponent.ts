import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  imports: [],
  templateUrl: './childcomponent.html',
  styleUrl: './childcomponent.css',
})
export class Childcomponent {
  @Input() userName:string|undefined
}
