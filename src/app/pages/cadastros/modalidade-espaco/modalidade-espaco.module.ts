import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListarModalidadeEspacoComponent } from './listar-modalidade-espaco/listar-modalidade-espaco.component';
import { ManterModalidadeEspacoComponent } from './manter-modalidade-espaco/manter-modalidade-espaco.component';
import { modalidadeEspacoRoutes } from './modalidade-espaco.routes';
import { ModalidadeEspacoService } from '../../../services/domain/modalidade-espaco.service';
import { VisualizarModalidadeEspacoComponent } from './visualizar-modalidade-espaco/visualizar-modalidade-espaco.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(modalidadeEspacoRoutes)
  ],
  declarations: [
    ListarModalidadeEspacoComponent, 
    ManterModalidadeEspacoComponent, 
    VisualizarModalidadeEspacoComponent
  ],
  exports: [
    ListarModalidadeEspacoComponent, 
    ManterModalidadeEspacoComponent, 
    VisualizarModalidadeEspacoComponent
  ],
  providers: [
    ModalidadeEspacoService
  ]
})
export class ModalidadeEspacoModule { }
