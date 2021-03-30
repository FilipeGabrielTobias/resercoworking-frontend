import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalidadeEspacoService } from '../../../../services/domain/modalidade-espaco.service';
import { ModalidadeEspacoModel } from '../../../../models/modalidade-espaco.model';

@Component({
  selector: 'app-manter-modalidade-espaco',
  templateUrl: './manter-modalidade-espaco.component.html',
  styleUrls: ['./manter-modalidade-espaco.component.css']
})
export class ManterModalidadeEspacoComponent implements OnInit {

  modalidadeEspacoForm: FormGroup;
  modalidadeEspaco: ModalidadeEspacoModel = new ModalidadeEspacoModel();

  constructor(private fb: FormBuilder, private modalidadeEspacoService: ModalidadeEspacoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.params.id) {
      this.modalidadeEspacoService.getModalidadeEspacoById(this.route.snapshot.params.id)
        .subscribe(value => {
          this.modalidadeEspaco = value;
          this.buildForm();
        });
    } else {
      this.buildForm();
    }
  }

  buildForm(): void {
    this.modalidadeEspacoForm = this.fb.group({
      id: [this.modalidadeEspaco.id, []],
      nome: [this.modalidadeEspaco.nome, [Validators.required]],
      descricao: [this.modalidadeEspaco.descricao, [Validators.required]],
    });
  }

  salvar() {
    if (this.route.snapshot.params.id) {
      this.modalidadeEspacoService.updateModalidadeEspaco(this.route.snapshot.params.id, this.modalidadeEspacoForm.value)
        .subscribe(value => {
          this.router.navigate(['/modalidadeEspaco']);
        });      
    } else {
      this.modalidadeEspacoService.saveModalidadeEspaco(this.modalidadeEspacoForm.value)
        .subscribe(value => {
          this.router.navigate(['/modalidadeEspaco']);
        });
    }
  }

}
