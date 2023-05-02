import { Component, Input, Output, EventEmitter } from '@angular/core';
import { userService } from '../../services/user.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'trunsfer-fund',
  templateUrl: './trunsfer-fund.component.html',
  styleUrls: ['./trunsfer-fund.component.scss']
})
export class TrunsferFundComponent {

  @Input() contact!: any;
  @Input() maxCoins!: number;
  @Output() onTransferCoins: EventEmitter<any> = new EventEmitter();

  amount!: number ;

  constructor(private userService: userService) {}

  onSubmit() {
    
    if (this.amount > this.maxCoins) return;
    const user: User | undefined = this.userService.getUser() 
    if (user && user.coins >= this.amount) {
      this.userService.addMove(this.contact, this.amount).subscribe((updatedUser: User | boolean) => {
        if (updatedUser) {
          this.onTransferCoins.emit();
        }
      });
    }
  }

}