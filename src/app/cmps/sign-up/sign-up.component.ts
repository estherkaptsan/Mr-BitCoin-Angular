import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { userService } from 'src/app/services/user.service';
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(
    private userService: userService,
    private router: Router
  ) { }

  userName: string = ''

  onSignup(ev: Event) {
    this.userService.signup(this.userName).subscribe(user => {
      this.router.navigate(['/'])
    })
  }

  handleChange(event: any) {
    const field = event.target.name;
    let value = event.target.value;
    switch (event.target.type) {
      case 'number':
      case 'range':
        value = +value;
        break;
      case 'checkbox':
        value = event.target.checked;
        break;
    }
    this.userName = value;
  }

}
