import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../security/authentication/login/user.model";
import { StorageService } from "./storage.service";

@Injectable()
export class AuthenticationService {

    constructor(public http: HttpClient,
                public storage: StorageService,){

    }

    baseUrl(): string {
        return '/login';
    }

    authenticate(form: FormGroup): Observable<User>{
        return this.http.post<User>(environment.api + this.baseUrl(), form);
    }

    isLoggedIn(): boolean {
        return this.storage.getLocalUser() ? true : false;
    }

    logout() {
        this.storage.setLocalUser(null);
    }
}