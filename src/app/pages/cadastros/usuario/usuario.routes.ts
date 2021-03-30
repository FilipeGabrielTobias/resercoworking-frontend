import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { ManterUsuarioComponent } from './manter-usuario/manter-usuario.component';

const ROUTES = [
  { 
    path: '', 
    component: ListarUsuarioComponent, 
    // canLoad: [LoggedInGuard], 
    // canActivate: [LoggedInGuard]
  },
  { 
    path: 'incluir', 
    component: ManterUsuarioComponent, 
    // canLoad: [LoggedInGuard], 
    // canActivate: [LoggedInGuard]
  }
];

export const usuarioRoutes = ROUTES;
