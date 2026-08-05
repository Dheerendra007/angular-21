import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrls: ['./user-details.css'],
})
export class UserDetails {
  userData: any = signal("");

  constructor(public userService: UserService, public route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.userService.userList());
    this.route.params.subscribe(params => {
      const userId = params['id'];
      const data = this.userService.userList();
      const userDetails = data.find((user: any) => user.id === parseInt(userId, 10));
      this.userData.set(userDetails);
    });
  }
}
