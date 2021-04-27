import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, Router } from "@angular/router";
import { AuthenticationService } from "src/app/services/authentication.service";

@Injectable()
export class AuthenticationGuard implements CanActivate, CanLoad {
    constructor(private router: Router,
                private authenticationService: AuthenticationService
    ) {}
    
    checkAuthentication(): boolean {
        const loggedIn = this.authenticationService.isLoggedIn();
        if (!loggedIn) {
            this.router.navigate(['/auth/login']);
        }
        return loggedIn;
    }

    canLoad(): boolean{
        return this.checkAuthentication();
    }

    canActivate(): boolean{        
        return this.checkAuthentication();
    }
}