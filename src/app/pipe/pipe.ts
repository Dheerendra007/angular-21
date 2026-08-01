import { CurrencyPipe, DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TrimTextPipePipe } from '../custom-pipe/trim-text-pipe-pipe';

@Component({
  selector: 'app-pipe',
  imports: [UpperCasePipe,TitleCasePipe,CurrencyPipe,DatePipe,TrimTextPipePipe],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css',
})
export class Pipe {
  name = signal("hi this is dheerendra")
  username = signal("Dheerendra")
  amount = signal(1000)
   date = signal(new Date)
}
