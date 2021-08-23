import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Contact } from "@contact-list/api-interfaces";
import { NotificationsService, ContactsService } from "@contact-list/core-data";
import { take, tap } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class ContactsFacade {
    private _allContactsSource$ = new BehaviorSubject<Contact[]>([]);
    allContacts$: Observable<Contact[]> = this._allContactsSource$.asObservable();

    private _selectedContactSource$ = new BehaviorSubject<Contact>({} as Contact);
    selectedContact$: Observable<Contact> =
    this._selectedContactSource$.asObservable();

    constructor(
        private contactsService: ContactsService,
        private notificationsService: NotificationsService
        ) {}

    loadContacts() {
        this.contactsService
            .all()
            .pipe(
                tap((contacts) => this._allContactsSource$.next(contacts)),
                take(1)
            )
            .subscribe();
    };
    
    selectContact(contactId: string) {
        this.contactsService
            .find(contactId)
            .pipe(
                tap((contact) => this._selectedContactSource$.next(contact)),
                take(1)
            )
            .subscribe();
    };

    saveContact(contact: Contact) {
        contact.id ? this.updateContact(contact) : this.createContact(contact)
    };

    createContact(contact: Contact) {
        this.contactsService
            .create(contact)
            .pipe(
                tap(() => {
                    this.loadContacts();
                    this.notificationsService.notify('Contact Successfully Created')
                }),
                take(1)
            )
            .subscribe()
    };

    updateContact(contact: Contact) {
        this.contactsService
            .update(contact)
            .pipe(
                tap(() => {
                    this.loadContacts();
                    this.notificationsService.notify('Contact Successfully Updated')
                }),
                take(1)
            )
            .subscribe();
        }
    
    deleteContact(contactId: string) {
        this.contactsService
            .delete(contactId)
            .pipe(
                tap(() => {
                    this.loadContacts();
                    this.notificationsService.notify('Contact Successfully Deleted')
                }),
                take(1)
            )
            .subscribe();
    }


}