import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { AccountsComponent } from './accounts/accounts.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerAccountsComponent } from './customer-accounts/customer-accounts.component';
import { LoginComponent } from './login/login.component';
import { AdminTampletComponent } from './admin-tamplet/admin-tamplet.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthorizationGuard } from './guards/authorization.guard';  // Assure-toi que AuthorizationGuard est bien importé
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'admin', component: AdminTampletComponent, canActivate: [AuthenticationGuard],
    children: [
      { path: 'customers', component: CustomersComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'new-customer', component: NewCustomerComponent, canActivate: [AuthorizationGuard] },
      { path: 'edit-customer/:id', component: EditCustomerComponent },
      { path: 'customer-accounts/:id', component: CustomerAccountsComponent },
      { path: 'notAuthorized', component: NotAuthorizedComponent }, // Page NotAuthorized accessible
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
