import { Component, Input } from '@angular/core';
import { userService } from '../../services/user.service';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})

export class MovesListComponent {
  @Input() contact?: Contact;

  constructor(private userService: userService) { }

  get moves() {
    return this.userService.getUserMoves(this.contact)
  }
}