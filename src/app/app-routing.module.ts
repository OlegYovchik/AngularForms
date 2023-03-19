import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsComponent} from "./forms/forms.component";
import {HomeComponent} from "./home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {ContactsComponent} from "./contacts/contacts.component";
import {AuthComponent} from "./auth/auth.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'form', component: FormsComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'auth', component: AuthComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
