import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalidadeEspacoService } from '../../../../services/domain/modalidade-espaco.service';
import { ModalidadeEspacoModel } from '../../../../models/modalidade-espaco.model';

@Component({
  selector: 'app-visualizar-modalidade-espaco',
  templateUrl: './visualizar-modalidade-espaco.component.html',
  styleUrls: ['./visualizar-modalidade-espaco.component.css']
})
export class VisualizarModalidadeEspacoComponent implements OnInit {

  modalidadeEspaco: ModalidadeEspacoModel;

  constructor(private route: ActivatedRoute, private modalidadeEspacoService: ModalidadeEspacoService) { }

  ngOnInit() {
    this.modalidadeEspacoService.getModalidadeEspacoById(this.route.snapshot.params.id)
      .subscribe(value => {
        this.modalidadeEspaco = value;
      })
  }
}
