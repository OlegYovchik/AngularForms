import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsComponent} from "./forms/forms.component";
import {HomeComponent} from "./home/home.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'form', component: FormsComponent}
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
