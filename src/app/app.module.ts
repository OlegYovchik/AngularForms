import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SelectComponent} from "./select/select.component";
import {FormsComponent} from "./forms/forms.component";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
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
import { AuthInterceptor } from './auth-interceptor.service';
import { AdminToolsComponent } from './admin-tools/admin-tools.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { TableComponent } from './table/table.component';
import { ConfigService } from './config.service';
import { CustomCellDirective } from './custom-cell.directive';


const INTERCEPTOR_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

export function loadConfig(config: ConfigService){return () => config.load()};

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
    ShowBlockDirective,
    AdminToolsComponent,
    CustomInputComponent,
    TableComponent,
    CustomCellDirective,
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
  providers: [
    { 
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      deps: [ConfigService], 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
