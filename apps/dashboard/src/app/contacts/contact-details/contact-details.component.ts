import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Contact } from '@contact-list/api-interfaces';

@Component({
  selector: 'contact-list-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
  currentContact: Contact;
  originalTitle: string;

  @Output() save = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() form: FormGroup;

  @Input() set contact(value: Contact | null) {
    if (value) this.originalTitle = value.name;
    this.currentContact = Object.assign({}, value);
  }

  saveForm(formDirective: FormGroupDirective) {
    if (formDirective.invalid) return;
    this.save.emit(formDirective.value);
    formDirective.resetForm();
  }

  cancel() {
    this.cancelled.emit();
  };

}
