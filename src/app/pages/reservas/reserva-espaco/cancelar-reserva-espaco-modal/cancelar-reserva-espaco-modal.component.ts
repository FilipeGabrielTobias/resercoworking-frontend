import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservaEspacoResumoModel } from 'src/app/models/reserva-espaco-resumo.model';

@Component({
  selector: 'app-cancelar-reserva-espaco-modal',
  templateUrl: './cancelar-reserva-espaco-modal.component.html',
  styleUrls: ['./cancelar-reserva-espaco-modal.component.css']
})
export class CancelarReservaEspacoModalComponent implements OnInit {

  reservaEspacoResumoModal: ReservaEspacoResumoModel;
  cancelarReservaEspacoForm: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.cancelarReservaEspacoForm = this.fb.group({
      motivo: [null, [Validators.required]],
      reservaEspaco: [this.reservaEspacoResumoModal, [Validators.required]]
    });
  }

}
