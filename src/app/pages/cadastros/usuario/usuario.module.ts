import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { ManterUsuarioComponent } from './manter-usuario/manter-usuario.component';
import { usuarioRoutes } from './usuario.routes';
import { UsuarioService } from '../../../services/domain/usuario.service';
import { PerfilService } from 'src/app/services/domain/perfil.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(usuarioRoutes)
  ],
  declarations: [
    ManterUsuarioComponent, 
    ListarUsuarioComponent
  ],
  exports: [
    ManterUsuarioComponent, 
    ListarUsuarioComponent
  ],
  providers: [
    UsuarioService,
    PerfilService
  ]
})
export class UsuarioModule { }
