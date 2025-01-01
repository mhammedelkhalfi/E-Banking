import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAuthenticated: Boolean=false;
  roles: any;
  username :any;
  accessToken!: string;


  constructor(private http: HttpClient) { }

  public login(username: string, password: string) {
    let option = {
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
    };
    let params = new HttpParams()
      .set("username", username)
      .set("password", password);
    //console.log(password);
    //console.log(this.accessToken);
    return this.http.post("http://localhost:8085/auth/login", params, option);
  }

  loadProfile(data: any) {
    this.isAuthenticated=true;
    this.accessToken = data['access_token'];
    let decodedJwt: any = jwtDecode(this.accessToken);
    this.username = decodedJwt.sub;
    this.roles=decodedJwt.scope;

    //console.log(this.username);
    //console.log(this.roles);
    //console.log(this.isAuthenticated);
  }

  logout() {
    this.isAuthenticated=false;
    this.accessToken="undefined";
    this.username=undefined;
    this.roles=undefined;
  }
}
