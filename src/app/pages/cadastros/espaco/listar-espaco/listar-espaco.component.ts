import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { first } from 'rxjs/operators';
import { EspacoResumoModel } from 'src/app/models/espaco-resumo.model';
import { EspacoService } from 'src/app/services/domain/espaco.service';

@Component({
  selector: 'app-listar-espaco',
  templateUrl: './listar-espaco.component.html',
  styleUrls: ['./listar-espaco.component.css']
})
export class ListarEspacoComponent implements OnInit {

  espacos: EspacoResumoModel[] = [];

  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private espacoService: EspacoService,
              private modalService: NzModalService) { }

  ngOnInit(): void {
    this.getModalidades();
  }

  getModalidades(): void {
    this.espacoService.getEspacos()
      .pipe(first())
      .subscribe(value => this.espacos = value);
  }

  visualizar(data: EspacoResumoModel): void {
    this.router.navigate(['./visualizar', data.id], {relativeTo: this.route});
  }

  alterar(data: EspacoResumoModel): void {
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
    this.espacoService.deleteEspaco(id)
      .subscribe(() => {
        this.getModalidades();
      });
  }
}
