import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ModalidadeEspacoModel } from '../../../../models/modalidade-espaco.model';
import { ModalidadeEspacoService } from '../../../../services/domain/modalidade-espaco.service';

@Component({
  selector: 'app-listar-modalidade-espaco',
  templateUrl: './listar-modalidade-espaco.component.html',
  styleUrls: ['./listar-modalidade-espaco.component.css']
})
export class ListarModalidadeEspacoComponent implements OnInit {

  modalidades: ModalidadeEspacoModel[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private modalidadeEspacoService: ModalidadeEspacoService) { }

  ngOnInit(): void {
    this.getModalidades();
  }

  getModalidades(): void {
    this.modalidadeEspacoService.getModalidadesEspaco()
      .pipe(first())
      .subscribe(value => this.modalidades = value);
  }

  visualizar(data): void {
    this.router.navigate(['./visualizar', data.id], {relativeTo: this.route});
  }

  alterar(data): void {
    this.router.navigate(['./alterar', data.id], {relativeTo: this.route});
  }

  excluir(id): void {
    this.modalidadeEspacoService.deleteModalidadeEspaco(id)
      .subscribe(value => {
        this.getModalidades();
      });
  }
}
