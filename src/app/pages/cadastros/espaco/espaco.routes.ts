import { AuthenticationGuard } from 'src/app/security/guard/authentication.guard';
import { EspacoService } from 'src/app/services/domain/espaco.service';
import { ModalidadeEspacoService } from 'src/app/services/domain/modalidade-espaco.service';
import { ListarEspacoComponent } from './listar-espaco/listar-espaco.component';
import { ManterEspacoComponent } from './manter-espaco/manter-espaco.component';
import { VisualizarEspacoComponent } from './visualizar-espaco/visualizar-espaco.component';

const ROUTES = [
  {
    path: '', 
    component: ListarEspacoComponent,
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard] 
  },
  {
    path: 'incluir', 
    component: ManterEspacoComponent,
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard] 
  },
  {
    path: 'visualizar/:id', 
    resolve: {
      entity: EspacoService
    },
    component: VisualizarEspacoComponent,
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard] 
  },
  {
    path: 'alterar/:id', 
    resolve: {
      entity: EspacoService
    },
    component: ManterEspacoComponent,
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard] 
  },
];
export const espacoRoutes = ROUTES;
