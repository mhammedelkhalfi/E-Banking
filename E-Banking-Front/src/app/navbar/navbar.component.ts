import {Component, OnInit} from '@angular/core';
import {LoginService} from "../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  constructor(public  loginService : LoginService, private  router : Router) {
  }

  ngOnInit(): void{

  }

  handleLogout() {
    this.loginService.logout();
    this.router.navigateByUrl("/login");
  }
}
