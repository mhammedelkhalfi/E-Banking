import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AccountsService} from "../service/accounts.service";
import {catchError, Observable, throwError} from "rxjs";
import {AccountDetails} from "../model/Account.model";
import {throws} from "node:assert";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit{

  accountFormGroup!: FormGroup;
  currentPage: number=0;
  pageSize: number=5;
  accuountObservable!: Observable<AccountDetails>
  operationFormGroup! : FormGroup;
  errorMessage!: String;

  constructor(private fb : FormBuilder,private accoutsService: AccountsService) {
  }

  ngOnInit(): void {
    this.accountFormGroup=this.fb.group({
      accountId: this.fb.control('')
    });

    this.operationFormGroup=this.fb.group({
      operationType: this.fb.control(null),
      amount: this.fb.control(0),
      description: this.fb.control(null), // Correction ici
      accountDestination: this.fb.control(null)
    })
  }

  HandleSearchAccount() {
    let accountId: String=this.accountFormGroup.value.accountId;
    this.accuountObservable=this.accoutsService.getAccount(accountId,this.currentPage,this.pageSize).pipe(
      catchError(err=>{
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }

  gotoPage(page: number) {
    this.currentPage=page;
    this.HandleSearchAccount();
  }

  HandleAccountOperation() {
    let accountId: String = this.accountFormGroup.value.accountId; // Ensure this is the correct value
    let operationType=this.operationFormGroup.value.operationType;
    let amount: number = this.operationFormGroup.value.amount;
    let description: String = this.operationFormGroup.value.description; // Correction ici
    let accountDestination: String = this.operationFormGroup.value.accountDestination; // Correction ici


    if(operationType=='DEBIT'){
      this.accoutsService.debit(accountId,amount,description).subscribe({
        next : (data)=>{
          alert("Debit Operation Successfully")
          this.HandleSearchAccount(); // pour recharger le compte
          this.operationFormGroup.reset(); // pour rest le formulaire
        },error : err => {
          console.log(err)
        }
      })
      console.log('Operation Type:', operationType);
      console.log('Amount:', amount);
      console.log('Description:', description);
    }else if(operationType=='CREDIT'){
      this.accoutsService.credit(accountId,amount,description).subscribe({
        next : (data)=>{
          alert("Credit Operation Successfully")
          this.HandleSearchAccount();
          this.operationFormGroup.reset();
        },error : err => {
          console.log(err)
        }
      })
      console.log('Operation Type:', operationType);
      console.log('Amount:', amount);
      console.log('Description:', description);
    }else if(operationType=='TRANSFER'){
      this.accoutsService.transfer(accountId,accountDestination,amount,description).subscribe({
        next : (data)=>{
          alert("Transfer Operation Successfully")
          this.HandleSearchAccount();
          this.operationFormGroup.reset();
        },error : err => {
          console.log(err)
        }
      })
      console.log('Operation Type:', operationType);
      console.log('Amount:', amount);
      console.log('Description:', description);
      console.log('Account Destination:', accountDestination);
    }
  }
}
