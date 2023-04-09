import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SelectComponent} from "./select/select.component";
import {FormsComponent} from "./forms/forms.component";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AuthComponent } from './auth/auth.component';
import { SelectByComponent } from './select-by/select-by.component';
import { OptionComponent } from './option/option.component';
import { AppTrimDirective } from './app-trim.directive';
import { ShowBlockDirective } from './show-block.directive';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    FormsComponent,
    CheckboxGroupComponent,
    MultiSelectComponent,
    HomeComponent,
    NavigationComponent,
    ContactsComponent,
    AuthComponent,
    SelectByComponent,
    OptionComponent,
    AppTrimDirective,
    ShowBlockDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    BsDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
