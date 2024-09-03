import {HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LoginService} from "../service/login.service";


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor{

  constructor(private loginService: LoginService) {

  }


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!request.url.includes("/auth/login")){
      let newRequest = request.clone({
        headers:request.headers.set(`Authorization`,`Bearer ${this.loginService.accessToken}`)
      });
      return next.handle(newRequest);
    }else return next.handle(request);


  }

}
