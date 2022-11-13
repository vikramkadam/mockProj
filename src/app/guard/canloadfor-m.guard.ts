import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { HttpService } from '../myServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class CanloadforMGuard implements CanLoad {
  constructor(private http: HttpService, private router:Router, private toaster : ToastrService){}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
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
