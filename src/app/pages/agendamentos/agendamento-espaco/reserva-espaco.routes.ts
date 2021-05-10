import { AuthenticationGuard } from 'src/app/security/guard/authentication.guard';
import { EspacoService } from 'src/app/services/domain/espaco.service';
import { ReservaEspacoService } from 'src/app/services/domain/reserva-espaco.service';
import { ListarReservaEspacoComponent } from './listar-reserva-espaco/listar-reserva-espaco.component';
import { ManterReservaEspacoComponent } from './manter-reserva-espaco/manter-reserva-espaco.component';
import { VisualizarReservaEspacoComponent } from './visualizar-reserva-espaco/visualizar-reserva-espaco.component';

const ROUTES = [
  {
    path: '', 
    component: ListarReservaEspacoComponent,
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard] 
  },
  {
    path: 'incluir', 
    component: ManterReservaEspacoComponent,
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard] 
  },
  {
    path: 'visualizar/:id', 
    resolve: {
      entity: ReservaEspacoService
    },
    component: VisualizarReservaEspacoComponent,
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard] 
  },
  {
    path: 'alterar/:id', 
    resolve: {
      entity: ReservaEspacoService
    },
    component: ManterReservaEspacoComponent,
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard] 
  },
];
export const reservaEspacoRoutes = ROUTES;
