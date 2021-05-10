import { AuthenticationGuard } from 'src/app/security/guard/authentication.guard';
import { PremiacaoService } from 'src/app/services/domain/premiacao.service';
import { ListarPremiacaoComponent } from './listar-premiacao/listar-premiacao.component';
import { ManterPremiacaoComponent } from './manter-premiacao/manter-premiacao.component';
import { VisualizarPremiacaoComponent } from './visualizar-premiacao/visualizar-premiacao.component';

const ROUTES = [
  { 
    path: '', 
    component: ListarPremiacaoComponent,
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard] 
  },
  { 
    path: 'incluir', 
    component: ManterPremiacaoComponent,
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard] 
  },
  { 
    path: 'alterar/:id',
    resolve: {
      entity: PremiacaoService
    },
    component: ManterPremiacaoComponent,
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard] 
  },
  { 
    path: 'visualizar/:id', 
    resolve: {
      entity: PremiacaoService
    },
    component: VisualizarPremiacaoComponent ,
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard]
  },
];
export const premiacaoRoutes = ROUTES;
