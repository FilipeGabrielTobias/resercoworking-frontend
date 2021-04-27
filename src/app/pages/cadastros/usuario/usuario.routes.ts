import { AuthenticationGuard } from 'src/app/security/guard/authentication.guard';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { ManterUsuarioComponent } from './manter-usuario/manter-usuario.component';

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
  }
];

export const usuarioRoutes = ROUTES;
