import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EspacoService } from 'src/app/services/domain/espaco.service';
import { ReservaEspacoService } from 'src/app/services/domain/reserva-espaco.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListarReservaEspacoComponent } from './listar-reserva-espaco/listar-reserva-espaco.component';
import { ManterReservaEspacoComponent } from './manter-reserva-espaco/manter-reserva-espaco.component';
import { reservaEspacoRoutes } from './reserva-espaco.routes';
import { VisualizarReservaEspacoComponent } from './visualizar-reserva-espaco/visualizar-reserva-espaco.component';
import { CancelarReservaEspacoModalComponent } from './cancelar-reserva-espaco-modal/cancelar-reserva-espaco-modal.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(reservaEspacoRoutes)
  ],
  declarations: [
    VisualizarReservaEspacoComponent,
    ManterReservaEspacoComponent,
    ListarReservaEspacoComponent,
    CancelarReservaEspacoModalComponent
  ],
  exports: [
    VisualizarReservaEspacoComponent,
    ManterReservaEspacoComponent,
    ListarReservaEspacoComponent
  ],
  providers: [
    ReservaEspacoService,
    EspacoService
  ]
})
export class ReservaEspacoModule { }
