import { Component, Input, OnInit } from '@angular/core';
import { userService } from 'src/app/services/user.service';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent {
  constructor(private userService: userService) { }

  user: User | undefined
  
  ngOnInit() {
    this.user = this.userService.getUser()
  }
}
