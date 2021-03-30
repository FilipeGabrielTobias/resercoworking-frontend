import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PremiacaoService } from 'src/app/services/domain/premiacao.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListarPremiacaoComponent } from './listar-premiacao/listar-premiacao.component';
import { ManterPremiacaoComponent } from './manter-premiacao/manter-premiacao.component';
import { premiacaoRoutes } from './premiacao.routes';
import { VisualizarPremiacaoComponent } from './visualizar-premiacao/visualizar-premiacao.component';




@NgModule({
  imports: [
    SharedModule, 
    RouterModule.forChild(premiacaoRoutes)
  ],
  declarations: [
    ManterPremiacaoComponent, 
    ListarPremiacaoComponent, 
    VisualizarPremiacaoComponent
  ],
  exports: [
    ManterPremiacaoComponent, 
    ListarPremiacaoComponent, 
    VisualizarPremiacaoComponent
  ],
  providers: [
    PremiacaoService
  ]
})
export class PremiacaoModule { }
