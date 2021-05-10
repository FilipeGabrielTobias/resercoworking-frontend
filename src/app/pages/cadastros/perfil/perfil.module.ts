import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PerfilService } from 'src/app/services/domain/perfil.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListarPerfilComponent } from './listar-perfil/listar-perfil.component';
import { ManterPerfilComponent } from './manter-perfil/manter-perfil.component';
import { perfilRoutes } from './perfil.routes';
import { VisualizarPerfilComponent } from './visualizar-perfil/visualizar-perfil.component';




@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(perfilRoutes)
  ],
  declarations: [
    ListarPerfilComponent, 
    ManterPerfilComponent,
    VisualizarPerfilComponent
  ],
  exports: [
    ListarPerfilComponent, 
    ManterPerfilComponent,
    VisualizarPerfilComponent
  ],
  providers: [
    PerfilService
  ]
})
export class PerfilModule { }
