import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { Router } from '@angular/router';

@Component({
    selector: 'contact-preview',
    templateUrl: './contact-preview.component.html',
    styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {
    @Input() contact!: Contact
    @Output() remove = new EventEmitter<string>()
    constructor(private router: Router) { }

    onRemoveContact() {
        this.remove.emit(this.contact._id)
    }

    linkToDetails() {
        this.router.navigate(['/contact', this.contact._id]);
    }
}
