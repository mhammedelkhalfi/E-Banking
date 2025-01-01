import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.loginService.roles.includes('ADMIN')) {
      return true; // Autoriser l'accès si l'utilisateur a le rôle "ADMIN"
    } else {
      // Redirection vers la page "notAuthorized" si l'utilisateur n'a pas le rôle "ADMIN"
      this.router.navigate(['/admin/notAuthorized']);
      return false;
    }
  }
}
