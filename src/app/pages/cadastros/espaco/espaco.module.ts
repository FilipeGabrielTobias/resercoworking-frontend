import { NgModule } from '@angular/core';

import { EspacoRoutingModule } from './espaco-routing.module';

import { EspacoComponent } from './espaco.component';


@NgModule({
  imports: [EspacoRoutingModule],
  declarations: [EspacoComponent],
  exports: [EspacoComponent]
})
export class EspacoModule { }
