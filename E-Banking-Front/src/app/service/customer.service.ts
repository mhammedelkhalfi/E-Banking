import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/Customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  backendHost:String="http://localhost:8085";

  constructor(private http: HttpClient) {}
    public getCustomers(): Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(this.backendHost+"/customers");
  }

  public searchCustomers(keyword: String): Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(this.backendHost+"/customers/search?keyword="+keyword);
  }
  public saveCustomer(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.backendHost+"/customers",customer);
  }
  public deleteCustomer(id: number){
    return this.http.delete(this.backendHost+"/customers/"+id);
  }
  public updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.backendHost}/customers/${customer.id}`, customer);
  }

}

