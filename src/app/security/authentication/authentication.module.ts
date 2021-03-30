import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { authenticationRoutes } from './authentication.routes';
import { LoginComponent } from './login/login.component';



@NgModule({
  imports: [
    RouterModule.forChild(authenticationRoutes), 
    SharedModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthenticationService
  ],
  exports: [
    LoginComponent,
  ]
})
export class AuthenticationModule { }
