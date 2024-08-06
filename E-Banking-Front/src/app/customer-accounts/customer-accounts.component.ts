import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from '@angular/common/http'; // Import pour HttpClient
import { Customer } from "../model/Customer.model";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.css'] // Corrected styleUrls
})
export class CustomerAccountsComponent implements OnInit {

  customerId!: string;
  customer!: Customer;
  accounts: any[] = []; // Propriété pour stocker les comptes

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient // Injection de HttpClient
  ) {
    this.customer = this.router.getCurrentNavigation()?.extras.state as Customer;  // récupération de l'objet par state
  }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id']; // récupération de id par le route
    if (this.customerId) {
      this.getAccountsByCustomerId(Number(this.customerId)).subscribe(accounts => {
        this.accounts = accounts; // Stocker les comptes récupérés
      });
    }
  }

  public getAccountsByCustomerId(customerId: number): Observable<any> {
    const backendHost = 'http://localhost:8085'; // Remplacez par l'URL de votre backend
    return this.http.get<any[]>(`${backendHost}/customers/${customerId}/accounts`);
  }
}
