import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../service/customer.service";
import {catchError, map, Observable, throwError} from "rxjs";
import {Customer} from "../model/Customer.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{


  customers! : Observable<Array<Customer>>;
  errorMessage! : String;
  SearchformGroup : FormGroup | undefined; // 2- search

  constructor(private customerService: CustomerService,private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.SearchformGroup=this.fb.group({
      keyword: this.fb.control("")
    });
    this.handleSearchCustomers();
    /*this.customers=this.customerService.getCustomers().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );*/
  }

  handleSearchCustomers() {
    let kw= this.SearchformGroup?.value.keyword;
    this.customers=this.customerService.searchCustomers(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }

  handelDeleteCustomer(c: Customer) {
    let conf = confirm("Are you sure?")
    if(!conf)return;
    this.customerService.deleteCustomer(c.id).subscribe({
      next : (resp)=>{
        this.handleSearchCustomers(); // pour recharge la page
       /* this.customers=this.customers.pipe(
          map(data=>{
            let index = data.indexOf(c);
            data.splice(index,1)
            return data;
          })
        );*/
      },error: err => {
        console.log(err);
      }
    });
  }


}
