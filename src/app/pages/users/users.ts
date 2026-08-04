import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  userData:any = signal("");
  constructor(public userService: UserService) {}
  ngOnInit() {
    console.log(this.userService.userList());
    const data = this.userService.userList();
    this.userData.set(data);
  }
}
