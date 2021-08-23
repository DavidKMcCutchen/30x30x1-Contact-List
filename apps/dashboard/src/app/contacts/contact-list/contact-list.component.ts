import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '@contact-list/api-interfaces';

@Component({
  selector: 'contact-list-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  @Input() contacts: Contact[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
};

