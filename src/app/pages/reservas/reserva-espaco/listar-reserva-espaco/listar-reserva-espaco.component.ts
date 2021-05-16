import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { first } from 'rxjs/operators';
import { ReservaEspacoResumoModel } from 'src/app/models/reserva-espaco-resumo.model';
import { ReservaEspacoService } from 'src/app/services/domain/reserva-espaco.service';
import { CancelarReservaEspacoModalComponent } from '../cancelar-reserva-espaco-modal/cancelar-reserva-espaco-modal.component';

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
              private modalService: NzModalService,
              private viewContainerRef: ViewContainerRef) { }

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

  mostrarModalConfirmacao(data: ReservaEspacoResumoModel): void {
    const modal = this.modalService.create({
      nzTitle: 'Cancelar Reserva de Espaço',
      nzContent: CancelarReservaEspacoModalComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        reservaEspacoResumoModal: data
      },
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
      nzFooter: [
        {
          label: 'Cancelar',
          onClick: componentInstance => {
            this.cancelarReservaEspaco(componentInstance!.cancelarReservaEspacoForm);
          }
        }
      ]
    });
  }

  cancelarReservaEspaco(form: FormGroup): void {
    this.reservaEspacoService.cancelarReservaEspaco(form.value)
      .subscribe(() => {
        this.getModalidades();
      });
  }
}
