import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginService} from "../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  formLogin!: FormGroup;

  constructor(private fb : FormBuilder,private loginService:LoginService,private router : Router){
  }
  ngOnInit(): void {
    this.formLogin=this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control("")
    })
  }

  HandleLogin() {
    //console.log(this.formLogin.value)
    let usr = this.formLogin.value.username;
    let pwd = this.formLogin.value.password;
    this.loginService.login(usr,pwd).subscribe({
      next: data=>{
        console.log(data)
        this.loginService.loadProfile(data);
        this.router.navigateByUrl("/admin")
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
