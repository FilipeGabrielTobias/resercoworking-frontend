import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';



@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [
  ]
})
export class HomeModule { }
