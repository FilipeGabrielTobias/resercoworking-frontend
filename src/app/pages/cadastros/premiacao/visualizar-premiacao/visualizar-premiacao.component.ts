import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PremiacaoModel } from '../../../../models/premiacao.model';

@Component({
  selector: 'app-visualizar-premiacao',
  templateUrl: './visualizar-premiacao.component.html',
  styleUrls: ['./visualizar-premiacao.component.css']
})
export class VisualizarPremiacaoComponent implements OnInit {

  premiacao: PremiacaoModel;

  constructor(private route: ActivatedRoute) {
    this.premiacao = this.route.snapshot.data.entity || new PremiacaoModel();
  }

  ngOnInit() {
  }

  voltar(): void {
    history.go(-1);
  }
}
