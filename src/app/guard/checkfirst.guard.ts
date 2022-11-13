import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../myServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class CheckfirstGuard implements CanDeactivate<unknown> {

  constructor(private http:HttpService){}
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
      let userResponce ;
      if(this.http.getUserChangeValue())
      {
        userResponce = confirm("Do you wish to continue?");
       return userResponce;
      }
       else{
        return true;
       }    
  }
  
}
