import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManterEspacoComponent } from './manter-espaco/manter-espaco.component';
import { VisualizarEspacoComponent } from './visualizar-espaco/visualizar-espaco.component';
import { espacoRoutes } from './espaco.routes';
import { ListarEspacoComponent } from './listar-espaco/listar-espaco.component';
import { EspacoService } from 'src/app/services/domain/espaco.service';
import { ModalidadeEspacoService } from 'src/app/services/domain/modalidade-espaco.service';



@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(espacoRoutes)
  ],
  declarations: [
    VisualizarEspacoComponent,
    ManterEspacoComponent,
    ListarEspacoComponent
  ],
  exports: [
    VisualizarEspacoComponent,
    ManterEspacoComponent,
    ListarEspacoComponent
  ],
  providers: [
    EspacoService,
    ModalidadeEspacoService
  ]
})
export class EspacoModule { }
