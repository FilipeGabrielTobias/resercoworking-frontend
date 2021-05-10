import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalidadeEspacoModel } from '../../../../models/modalidade-espaco.model';

@Component({
  selector: 'app-visualizar-modalidade-espaco',
  templateUrl: './visualizar-modalidade-espaco.component.html',
  styleUrls: ['./visualizar-modalidade-espaco.component.css']
})
export class VisualizarModalidadeEspacoComponent implements OnInit {

  modalidadeEspaco: ModalidadeEspacoModel;

  constructor(private route: ActivatedRoute) {
    this.modalidadeEspaco = this.route.snapshot.data.entity || new ModalidadeEspacoModel();
  }

  ngOnInit() {
  }

  voltar(): void {
    history.go(-1);
  }
}
