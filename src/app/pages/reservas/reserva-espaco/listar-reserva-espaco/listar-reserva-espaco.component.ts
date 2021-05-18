import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { first } from 'rxjs/operators';
import { ReservaEspacoResumoModel } from 'src/app/models/reserva-espaco-resumo.model';
import { ReservaEspacoService } from 'src/app/services/domain/reserva-espaco.service';
import { ReactiveFormsUtils } from 'src/app/shared/utils/reactive-forms.utils';
import { CancelarReservaEspacoModalComponent } from '../cancelar-reserva-espaco-modal/cancelar-reserva-espaco-modal.component';
import { FinalizarReservaEspacoModalComponent } from '../finalizar-reserva-espaco-modal/finalizar-reserva-espaco-modal.component';

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

  mostratModalFinalizarReserva(data: ReservaEspacoResumoModel): void {
    const modal = this.modalService.create({
      nzTitle: 'Finalizar Reserva de Espaço - Feedback',
      nzContent: FinalizarReservaEspacoModalComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        reservaEspacoResumoModal: data
      },
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
      nzFooter: [
        {
          label: 'Finalizar',
          onClick: componentInstance => {
            this.finalizarReservaEspaco(data.id, componentInstance!.finalizarReservaEspacoForm);
          }
        }
      ]
    });
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

  podeFinalizar(data: ReservaEspacoResumoModel): boolean {
    return data.situacaoReservaEspaco === 'RESERVADO';
  }

  finalizarReservaEspaco(reservaId: number, form: FormGroup): void {
    if (!ReactiveFormsUtils.eval(form)) {
      ReactiveFormsUtils.markForm(form);
      return;
    }
    this.reservaEspacoService.finalizarReservaEspaco(reservaId, form.value)
      .subscribe(() => {
        this.getModalidades();
      })
  }

  cancelarReservaEspaco(form: FormGroup): void {
    if (!ReactiveFormsUtils.eval(form)) {
      ReactiveFormsUtils.markForm(form);
      return;
    }
    this.reservaEspacoService.cancelarReservaEspaco(form.value)
      .subscribe(() => {
        this.getModalidades();
      });
  }
}
