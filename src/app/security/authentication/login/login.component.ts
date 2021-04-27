import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { StorageService } from 'src/app/services/storage.service';
import { ReactiveFormsUtils } from 'src/app/shared/utils/reactive-forms.utils';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
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
            email: this.fb.control(null, [Validators.required, Validators.email]),
            senha: this.fb.control(null, [Validators.required])
        });
    }

    login() {
        if (!ReactiveFormsUtils.eval(this.loginForm)) {
            ReactiveFormsUtils.markForm(this.loginForm);
            return;
        }
        this.authenticationService.authenticate(this.loginForm.value)
            .subscribe(user => {
                this.StorageService.setLocalUser(user);
                this.router.navigate(['/home']);
            });
    }

    cadastrar(): void {
        this.router.navigate(['/usuario/incluir'], { queryParams: { clienteCad: true } });
    }

}