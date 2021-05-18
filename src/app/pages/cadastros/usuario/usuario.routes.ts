import { AuthenticationGuard } from 'src/app/security/guard/authentication.guard';
import { UsuarioService } from 'src/app/services/domain/usuario.service';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { ManterUsuarioComponent } from './manter-usuario/manter-usuario.component';
import { VisualizarUsuarioComponent } from './visualizar-usuario/visualizar-usuario.component';

const ROUTES = [
  { 
    path: '', 
    component: ListarUsuarioComponent, 
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard]
  },
  { 
    path: 'incluir', 
    component: ManterUsuarioComponent, 
  },
  { 
    path: 'alterar/:id',
    resolve: {
      entity: UsuarioService
    },
    component: ManterUsuarioComponent,
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard] 
  },
  { 
    path: 'visualizar/:id', 
    resolve: {
      entity: UsuarioService
    },
    component: VisualizarUsuarioComponent ,
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard]
  },
];

export const usuarioRoutes = ROUTES;
