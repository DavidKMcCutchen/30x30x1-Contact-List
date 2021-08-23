import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from "@angular/router";
import { ContactComponent } from './contacts/contacts.component';
import { LoginComponent, UiLoginModule } from "@contact-list/ui-login";

const routes: Route[] = [
{path: '', component: LoginComponent },
{path: 'contacts', component: ContactComponent },
{path: 'login', component: LoginComponent },
{path: '**', redirectTo: 'home', pathMatch: 'full' }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
