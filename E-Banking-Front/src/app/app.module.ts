import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomersComponent } from './customers/customers.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerAccountsComponent } from './customer-accounts/customer-accounts.component';
import { LoginComponent } from './login/login.component';
import { AdminTampletComponent } from './admin-tamplet/admin-tamplet.component';
import {AppHttpInterceptor} from "./interceptors/app-http.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    NavbarComponent,
    CustomersComponent,
    NewCustomerComponent,
    EditCustomerComponent,
    CustomerAccountsComponent,
    LoginComponent,
    AdminTampletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule // 1-  search
  ],
  providers: [
    provideClientHydration(),
    {provide : HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
