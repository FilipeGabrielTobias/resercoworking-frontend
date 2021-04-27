import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";
import { StorageService } from "../services/storage.service";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

        let localUser = this.storage.getLocalUser();

        let N = environment.api.length;
        let requestToAPI = req.url.substring(0, N) == environment.api;
        
        if (localUser && requestToAPI) {
            const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + localUser.accessToken)});
            return next.handle(authReq);
        }else {
            return next.handle(req);
        }
    }
}

export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};