import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { EspacoResumoModel } from 'src/app/models/espaco-resumo.model';
import { ReservaEspacoModel } from 'src/app/models/reserva-espaco.model';
import { EspacoService } from 'src/app/services/domain/espaco.service';
import { ReservaEspacoService } from 'src/app/services/domain/reserva-espaco.service';
import { ComparatorUtils } from 'src/app/shared/utils/comparator.utils';
import { ReactiveFormsUtils } from 'src/app/shared/utils/reactive-forms.utils';

@Component({
  selector: 'app-manter-reserva-espaco',
  templateUrl: './manter-reserva-espaco.component.html',
  styleUrls: ['./manter-reserva-espaco.component.css']
})
export class ManterReservaEspacoComponent implements OnInit {

  dateFormat = 'dd/MM/yyyy';

  reservaEspacoForm: FormGroup;
  reservaEspaco: ReservaEspacoModel;
  espacos: EspacoResumoModel[] = [];
  comparator = ComparatorUtils.getInstance();

  constructor(private fb: FormBuilder, 
              private reservaEspacoService: ReservaEspacoService, 
              private espacoService: EspacoService,
              private router: Router, 
              private route: ActivatedRoute) {
    this.reservaEspaco = this.route.snapshot.data.entity || new ReservaEspacoModel();
  }

  ngOnInit() {
    this.espacoService.getEspacos()
      .pipe(first())
      .subscribe(value => this.espacos = value);
    this.buildForm();
  }

  buildForm(): void {
    this.reservaEspacoForm = this.fb.group({
      id: [this.reservaEspaco.id, []],
      dataInicial: [this.reservaEspaco.dataInicial, [Validators.required]],
      dataFinal: [this.reservaEspaco.dataFinal, [Validators.required]],
      horaInicial: [this.reservaEspaco.horaInicial, [Validators.required]],
      horaFinal: [this.reservaEspaco.horaFinal, [Validators.required]],
      valorTotal: [this.reservaEspaco.valorTotal, []],
      quantidadePontosTotal: [this.reservaEspaco.quantidadePontosTotal, [Validators.required]],
      formaPagamento: [this.reservaEspaco.formaPagamento, [Validators.required]],
      situacaoReservaEspaco: [this.reservaEspaco.situacaoReservaEspaco, [Validators.required]],
      espaco: [this.reservaEspaco.espaco, [Validators.required]]
    });
  }

  salvar() {
    if (!ReactiveFormsUtils.eval(this.reservaEspacoForm)) {
      ReactiveFormsUtils.markForm(this.reservaEspacoForm);
      return;
    }
    if (this.reservaEspaco.id) {
      this.reservaEspacoService.updateReservaEspaco(this.reservaEspaco.id, this.reservaEspacoForm.value)
        .subscribe(() => {
          this.router.navigate(['/reserva-espaco']);
        });      
    } else {
      this.reservaEspacoService.saveReservaEspaco(this.reservaEspacoForm.value)
        .subscribe(() => {
          this.router.navigate(['/reserva-espaco']);
        });
    }
  }

  voltar(): void {
    history.go(-1);
  }
}
