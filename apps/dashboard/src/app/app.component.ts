import { Component } from '@angular/core';


@Component({
  selector: 'contact-list-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Contacts';
  links= [
    {path: '', icon: 'Home', title: 'Home'},
    {path: 'contacts', icon: 'view_list', title: 'Contacts'}
  ]
  }
