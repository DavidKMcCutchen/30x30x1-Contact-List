import { Inject, Injectable } from '@angular/core';
import { Contact } from "@contact-list/api-interfaces";
import { HttpClient } from "@angular/common/http";
import { mapTo } from "rxjs/operators";
import { ContactEnvironment, CONTACT_ENVIRONMENT } from "@contact-list/environment";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  model = 'contacts';

  constructor(
    private httpClient: HttpClient,
    @Inject(CONTACT_ENVIRONMENT) private environment: ContactEnvironment
  ) { }

  all() {
    return this.httpClient.get<Contact[]>(this.getUrl())
  };

  find(contactId: string) {
    return this.httpClient.get<Contact>(this.getUrlById(contactId))
  };

  create(contacts: Contact) {
    return this.httpClient.post<Contact>(this.getUrl(), contacts)
  };

  update(contacts: Contact) {
    return this.httpClient.patch<Contact>(this.getUrlById(contacts.id), contacts)
  };

  delete(contactId: string) {
    return this.httpClient.delete<Contact>(this.getUrlById(contactId)).pipe(mapTo(contactId))
  }; 

  getUrl() {
    return `${this.environment.apiUrl}${this.model}`
  };

  getUrlById(id: string) {
    return `${this.getUrl()}/${id}`
  } 
}
