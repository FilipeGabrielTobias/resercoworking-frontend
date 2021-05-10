import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { first } from 'rxjs/operators';
import { EspacoResumoModel } from 'src/app/models/espaco-resumo.model';
import { ReservaEspacoResumoModel } from 'src/app/models/reserva-espaco-resumo.model';
import { EspacoService } from 'src/app/services/domain/espaco.service';
import { ReservaEspacoService } from 'src/app/services/domain/reserva-espaco.service';

@Component({
  selector: 'app-listar-reserva-espaco',
  templateUrl: './listar-reserva-espaco.component.html',
  styleUrls: ['./listar-reserva-espaco.component.css']
})
export class ListarReservaEspacoComponent implements OnInit {

  reservas: ReservaEspacoResumoModel[] = [];

  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private reservaEspacoService: ReservaEspacoService,
              private modalService: NzModalService) { }

  ngOnInit(): void {
    this.getModalidades();
  }

  getModalidades(): void {
    this.reservaEspacoService.getReservasEspaco()
      .pipe(first())
      .subscribe(value => this.reservas = value);
  }

  visualizar(data: ReservaEspacoResumoModel): void {
    this.router.navigate(['./visualizar', data.id], {relativeTo: this.route});
  }

  alterar(data: ReservaEspacoResumoModel): void {
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
    this.reservaEspacoService.cancelarReservaEspaco(id)
      .subscribe(() => {
        this.getModalidades();
      });
  }
}
