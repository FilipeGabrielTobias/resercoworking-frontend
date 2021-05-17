import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservaEspacoResumoModel } from 'src/app/models/reserva-espaco-resumo.model';

@Component({
  selector: 'app-finalizar-reserva-espaco-modal',
  templateUrl: './finalizar-reserva-espaco-modal.component.html',
  styleUrls: ['./finalizar-reserva-espaco-modal.component.css']
})
export class FinalizarReservaEspacoModalComponent implements OnInit {

  reservaEspacoResumoModal: ReservaEspacoResumoModel;
  finalizarReservaEspacoForm: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.finalizarReservaEspacoForm = this.fb.group({
      descricao: [null, [Validators.required]],
      nota: [null, [Validators.required]]
    });
  }

}
