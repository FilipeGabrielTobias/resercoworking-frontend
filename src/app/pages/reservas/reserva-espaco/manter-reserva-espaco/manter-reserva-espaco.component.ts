import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { EspacoResumoModel } from 'src/app/models/espaco-resumo.model';
import { EspacoSubModel, ReservaEspacoModel } from 'src/app/models/reserva-espaco.model';
import { EspacoService } from 'src/app/services/domain/espaco.service';
import { ReservaEspacoService } from 'src/app/services/domain/reserva-espaco.service';
import { StorageService } from 'src/app/services/storage.service';
import { ComparatorUtils } from 'src/app/shared/utils/comparator.utils';
import { ReactiveFormsUtils } from 'src/app/shared/utils/reactive-forms.utils';

@Component({
  selector: 'app-manter-reserva-espaco',
  templateUrl: './manter-reserva-espaco.component.html',
  styleUrls: ['./manter-reserva-espaco.component.css']
})
export class ManterReservaEspacoComponent implements OnInit {

  dateFormat = 'dd/MM/yyyy';
  timeFormat = 'HH:mm';

  reservaEspacoForm: FormGroup;
  reservaEspaco: ReservaEspacoModel;
  espacos: EspacoResumoModel[] = [];
  comparator = ComparatorUtils.getInstance();

  constructor(private fb: FormBuilder, 
              private reservaEspacoService: ReservaEspacoService, 
              private espacoService: EspacoService,
              private router: Router, 
              private route: ActivatedRoute,
              private storage: StorageService) {
    this.reservaEspaco = this.route.snapshot.data.entity || new ReservaEspacoModel();
  }

  ngOnInit() {
    this.espacoService.getEspacos()
      .pipe(first())
      .subscribe(value => this.espacos = value);
    this.buildForm();

    this.reservaEspacoForm.get('horaInicial').valueChanges.subscribe(() => {
      this.calculaValorTotal();
      this.calculaQuantidadePontosTotal();
    });

    this.reservaEspacoForm.get('horaFinal').valueChanges.subscribe(() => {
      this.calculaValorTotal();
      this.calculaQuantidadePontosTotal();
    });

    this.reservaEspacoForm.get('espaco').valueChanges.subscribe(() => {
      this.calculaValorTotal();
      this.calculaQuantidadePontosTotal();
    });
  }

  buildForm(): void {
    this.reservaEspacoForm = this.fb.group({
      id: [this.reservaEspaco.id, []],
      dataInicial: [this.reservaEspaco.dataInicial, [Validators.required]],
      dataFinal: [this.reservaEspaco.dataFinal, [Validators.required]],
      horaInicial: [this.reservaEspaco.horaInicial, [Validators.required]],
      horaFinal: [this.reservaEspaco.horaFinal, [Validators.required]],
      valorTotal: [{value: this.reservaEspaco.valorTotal, disabled: true}, []],
      quantidadePontosTotal: [{value: this.reservaEspaco.quantidadePontosTotal, disabled: true}, [Validators.required]],
      formaPagamento: [this.reservaEspaco.formaPagamento, [Validators.required]],
      situacaoReservaEspaco: [{value: this.reservaEspaco.situacaoReservaEspaco, disabled: true}, [Validators.required]],
      usuarioReservou: [this.storage.getLocalUser(), []],
      espaco: [this.reservaEspaco.espaco, [Validators.required]]
    });
  }

  private get getHoraInicial(): Date {
    return this.reservaEspacoForm.get('horaInicial').value;
  }

  private get getHoraFinal(): Date {
    return this.reservaEspacoForm.get('horaFinal').value;
  }

  private get getDataInicial(): Date {
    return this.reservaEspacoForm.get('dataInicial').value;
  }

  private get getDataFinal(): Date {
    return this.reservaEspacoForm.get('dataFinal').value;
  }

  private get getEspaco(): any {
    return this.reservaEspacoForm.get('espaco').value;
  }

  salvar() {
    if (!ReactiveFormsUtils.eval(this.reservaEspacoForm)) {
      ReactiveFormsUtils.markForm(this.reservaEspacoForm);
      return;
    }
    this.convertDateToLocalDate();
    if (this.reservaEspaco.id) {
      this.reservaEspacoService.updateReservaEspaco(this.reservaEspaco.id, this.reservaEspacoForm.getRawValue())
        .subscribe(() => {
          this.router.navigate(['/reserva-espaco']);
        });      
    } else {
      this.reservaEspacoService.saveReservaEspaco(this.reservaEspacoForm.getRawValue())
        .subscribe(() => {
          this.router.navigate(['/reserva-espaco']);
        });
    }
  }

  private convertDateToLocalDate(): void {
    this.reservaEspacoForm.get('dataInicial').setValue(this.getDataInicial.toISOString().substring(0, 10));
    this.reservaEspacoForm.get('dataFinal').setValue(this.getDataFinal.toISOString().substring(0, 10));
    this.reservaEspacoForm.get('horaInicial').setValue(this.getHoraInicial.toISOString());
    this.reservaEspacoForm.get('horaFinal').setValue(this.getHoraFinal.toISOString());
  }

  private calculaValorTotal(): void {
    if (this.getHoraInicial && this.getHoraFinal && this.getEspaco) {
      let total: number = 0;
      let quantidadeHoras = (this.getHoraFinal.getMinutes() !== 0 ? this.getHoraFinal.getHours() + 0.5 : this.getHoraFinal.getHours()) - (this.getHoraInicial.getMinutes() !== 0 ? this.getHoraInicial.getHours() + 0.5 : this.getHoraInicial.getHours());
      if (quantidadeHoras !== 0) {
        total = this.getEspaco.valorHora * quantidadeHoras;
        this.reservaEspacoForm.get('valorTotal').setValue(total);
      }
    }
  }

  private calculaQuantidadePontosTotal(): void {
    if (this.getHoraInicial && this.getHoraFinal && this.getEspaco) {
      let total: number = 0;
      let quantidadeHoras = (this.getHoraFinal.getMinutes() !== 0 ? this.getHoraFinal.getHours() + 0.5 : this.getHoraFinal.getHours()) - (this.getHoraInicial.getMinutes() !== 0 ? this.getHoraInicial.getHours() + 0.5 : this.getHoraInicial.getHours());
      if (quantidadeHoras !== 0) {
        total = this.getEspaco.quantidadePontos * quantidadeHoras;
        this.reservaEspacoForm.get('quantidadePontosTotal').setValue(total);
      }
    }
  }

  voltar(): void {
    history.go(-1);
  }
}
