import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsFacade } from './contacts/contacts.facade';

@NgModule({
  imports: [CommonModule],
  providers: [ContactsFacade]
})
export class CoreStateModule {}
