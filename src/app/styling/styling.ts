import { Component } from '@angular/core';
import { UserData } from "./user-data/user-data";
import { AdminData } from "./admin-data/admin-data";

@Component({
  selector: 'app-styling',
  imports: [UserData, AdminData],
  templateUrl: './styling.html',
  styleUrl: './styling.css',
})
export class Styling {}
