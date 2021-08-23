import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact, emptyContact } from '@contact-list/api-interfaces';
import { ContactsFacade } from '@contact-list/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'contact-list-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactComponent implements OnInit {
  contacts$: Observable<Contact[]> = this.contactsFacade.allContacts$;
  selectedContact$: Observable<Contact> = this.contactsFacade.selectedContact$;

  form: FormGroup;

  constructor(
    private contactsFacade: ContactsFacade,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
    this.reset();
    this.contactsFacade.loadContacts();
  }

  selectedContact(contact: Contact) {
    this.contactsFacade.selectContact(contact.id);
    this.form.patchValue(contact);
  }

  reset() {
    this.selectedContact(emptyContact);
    this.form.reset();
  }

  createContact(contact: Contact) {
    this.contactsFacade.createContact(contact);
    this.reset();
  }

  updateContact(contact: Contact) {
    this.contactsFacade.updateContact(contact);
    this.reset();
  }

  saveContact(contact: Contact) {
    contact.id
      ? this.contactsFacade.updateContact(contact)
      : this.contactsFacade.createContact(contact);
  }

  deleteContact(contactId: string) {
    this.contactsFacade.deleteContact(contactId);
    this.reset();
  }

  cancel() {
    this.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      friendMeter: [''],
      inContact: ['']
    });
  }
}
