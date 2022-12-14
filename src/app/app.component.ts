import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private userService: UserService) { }

  title = 'survival-pool';

  get user(): String{
    return this.userService.getUser()
  }
}
