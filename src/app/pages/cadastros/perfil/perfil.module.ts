import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PerfilService } from 'src/app/services/domain/perfil.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListarPerfilComponent } from './listar-perfil/listar-perfil.component';
import { ManterPerfilComponent } from './manter-perfil/manter-perfil.component';
import { perfilRoutes } from './perfil.routes';




@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(perfilRoutes)
  ],
  declarations: [
    ListarPerfilComponent, 
    ManterPerfilComponent
  ],
  exports: [
    ListarPerfilComponent, 
    ManterPerfilComponent
  ],
  providers: [
    PerfilService
  ]
})
export class PerfilModule { }
