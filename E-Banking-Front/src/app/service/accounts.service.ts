import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountDetails} from "../model/Account.model";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  backendHost:String="http://localhost:8085";

  constructor(private http: HttpClient) { }

  public getAccount(accountId: String,page : number,size: number): Observable<AccountDetails>{
    return this.http.get<AccountDetails>(this.backendHost+"/accounts/"+accountId+"/pageOperations?page="+page+"&size="+size);
  }

  public debit(acountId:String,amount: number,description:String){
    let data = {accountId:acountId,amount:amount,description:description}
    return this.http.post(this.backendHost+"/accounts/debit",data);
  }
  public credit(acountId:String,amount: number,description:String){
    let data = {accountId:acountId,amount:amount,description:description}
    return this.http.post(this.backendHost+"/accounts/credit",data);
  }
  public transfer(accountSource: String, accountDestination: String, amount: number, description: String) {
    let data = { accountSource, accountDestination, amount, description }; // Correction ici
    return this.http.post(this.backendHost + "/accounts/transfer", data);
  }

}
