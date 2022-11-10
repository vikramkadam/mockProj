import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class passLogDetails implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
        req = req.clone({headers: req.headers.set('newInterceptor', 'newInterceptor')
                                             .set('Authorization','scrummanager-new')});
        return next.handle(req);
    }    
}
