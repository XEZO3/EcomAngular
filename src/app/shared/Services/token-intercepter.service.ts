import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService {

  constructor(private user:UserServiceService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let reqclone = req.clone({
      setHeaders:{
        Authorization: 'Bearer '+localStorage.getItem('Token')
      }
    })
    return next.handle(reqclone)
  }
}
