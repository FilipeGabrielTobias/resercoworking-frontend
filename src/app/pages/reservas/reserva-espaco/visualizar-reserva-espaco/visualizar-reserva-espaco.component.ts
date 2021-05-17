import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EspacoModel } from 'src/app/models/espaco.model';
import { ReservaEspacoModel } from 'src/app/models/reserva-espaco.model';

@Component({
  selector: 'app-visualizar-reserva-espaco',
  templateUrl: './visualizar-reserva-espaco.component.html',
  styleUrls: ['./visualizar-reserva-espaco.component.css']
})
export class VisualizarReservaEspacoComponent implements OnInit {

  reservaEspaco: ReservaEspacoModel;

  constructor(private route: ActivatedRoute) {
    this.reservaEspaco = this.route.snapshot.data.entity || new ReservaEspacoModel();
  }

  ngOnInit() {
  }

  finalizar(): void {

  }

  podeFinalizar(): boolean {
    return this.reservaEspaco.situacaoReservaEspaco === 'RESERVADO';
  }

  voltar(): void {
    history.go(-1);
  }
}
