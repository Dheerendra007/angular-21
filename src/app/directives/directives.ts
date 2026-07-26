import { Component, signal } from '@angular/core';
import { CommonModule, NgIf } from "../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-directives',
  imports: [NgIf,CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  isLogin=signal(true);
}
