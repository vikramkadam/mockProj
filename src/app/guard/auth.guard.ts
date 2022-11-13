import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { HttpService } from '../myServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private http: HttpService, private router:Router, private toaster : ToastrService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let isActive :any = this.http.checkUserIsValid();
      if(isActive != null)
      {
       
        return true;
      }
      else
      {
        this.toaster.warning("please Login First", "Login Error");
        this.router.navigate(['/hooks']);
       return  false;
      }
  
  }
  
}
