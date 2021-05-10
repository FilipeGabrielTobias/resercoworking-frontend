import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EspacoModel } from 'src/app/models/espaco.model';

@Component({
  selector: 'app-visualizar-reserva-espaco',
  templateUrl: './visualizar-reserva-espaco.component.html',
  styleUrls: ['./visualizar-reserva-espaco.component.css']
})
export class VisualizarReservaEspacoComponent implements OnInit {

  espaco: EspacoModel;

  constructor(private route: ActivatedRoute) {
    this.espaco = this.route.snapshot.data.entity || new EspacoModel();
  }

  ngOnInit() {
  }

  voltar(): void {
    history.go(-1);
  }
}
