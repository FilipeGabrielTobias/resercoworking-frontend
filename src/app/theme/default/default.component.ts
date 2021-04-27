import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/services/authentication.service";
import { StorageService } from "src/app/services/storage.service";

@Component({
    selector: 'layout-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss']
})
export class LayoutDefaultComponent {
    isCollapsed = false;

    constructor(private router: Router, private authService: AuthenticationService) {}

    logout(): void {
        this.authService.logout();
        this.router.navigate(['/auth/login'])
    }
}