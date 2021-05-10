import { AuthenticationGuard } from 'src/app/security/guard/authentication.guard';
import { ModalidadeEspacoService } from 'src/app/services/domain/modalidade-espaco.service';
import { ListarModalidadeEspacoComponent } from './listar-modalidade-espaco/listar-modalidade-espaco.component';
import { ManterModalidadeEspacoComponent } from './manter-modalidade-espaco/manter-modalidade-espaco.component';
import { VisualizarModalidadeEspacoComponent } from './visualizar-modalidade-espaco/visualizar-modalidade-espaco.component';

const ROUTES = [
  {
    path: '', 
    component: ListarModalidadeEspacoComponent,
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard] 
  },
  {
    path: 'incluir', 
    component: ManterModalidadeEspacoComponent,
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard] 
  },
  {
    path: 'visualizar/:id', 
    resolve: {
      entity: ModalidadeEspacoService
    },
    component: VisualizarModalidadeEspacoComponent,
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard] 
  },
  {
    path: 'alterar/:id', 
    resolve: {
      entity: ModalidadeEspacoService
    },
    component: ManterModalidadeEspacoComponent,
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard] 
  },
];
export const modalidadeEspacoRoutes = ROUTES;
