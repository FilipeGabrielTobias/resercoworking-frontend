import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
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

  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private modalidadeEspacoService: ModalidadeEspacoService,
              private modalService: NzModalService) { }

  ngOnInit(): void {
    this.getModalidades();
  }

  getModalidades(): void {
    this.modalidadeEspacoService.getModalidadesEspaco()
      .pipe(first())
      .subscribe(value => this.modalidades = value);
  }

  visualizar(data: ModalidadeEspacoModel): void {
    this.router.navigate(['./visualizar', data.id], {relativeTo: this.route});
  }

  alterar(data: ModalidadeEspacoModel): void {
    this.router.navigate(['./alterar', data.id], {relativeTo: this.route});
  }

  mostrarModalConfirmacao(id: number): void {
    this.modalService.confirm({
      nzTitle: 'Você tem certeza que deseja excluir o registro?',
      nzContent: '<b style="color: red;">Ao excluir não será possível desfazer</b>',
      nzOkText: 'Sim',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.excluir(id),
      nzCancelText: 'Não',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  excluir(id: number): void {
    this.modalidadeEspacoService.deleteModalidadeEspaco(id)
      .subscribe(value => {
        this.getModalidades();
      });
  }
}
