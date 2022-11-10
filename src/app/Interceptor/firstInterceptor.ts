import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";


export class firstInterceptor implements HttpInterceptor{
     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
    
        if(req.url.includes('nestedReactiveForm'))
        {
            req = req.clone({headers: req.headers.set('currentTopic','NestedReactiveForm')});
        }
        req = req.clone({headers: req.headers.set('Authorization','scrummanager')})
        return next.handle(req);
     }
}