import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private fb: FormBuilder,
        private authenticationService: AuthenticationService,
        private StorageService: StorageService,
        private activatedRoute: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: this.fb.control('', [Validators.required, Validators.email]),
            senha: this.fb.control('', [Validators.required])
        });
    }

    login() {
        this.authenticationService.authenticate(this.loginForm.value)
            .subscribe(user => {
                this.StorageService.setLocalUser(user);
            })
    }

}