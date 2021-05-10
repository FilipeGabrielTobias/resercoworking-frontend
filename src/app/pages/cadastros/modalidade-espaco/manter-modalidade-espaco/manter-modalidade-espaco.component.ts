import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsUtils } from 'src/app/shared/utils/reactive-forms.utils';
import { ModalidadeEspacoModel } from '../../../../models/modalidade-espaco.model';
import { ModalidadeEspacoService } from '../../../../services/domain/modalidade-espaco.service';

@Component({
  selector: 'app-manter-modalidade-espaco',
  templateUrl: './manter-modalidade-espaco.component.html',
  styleUrls: ['./manter-modalidade-espaco.component.css']
})
export class ManterModalidadeEspacoComponent implements OnInit {

  modalidadeEspacoForm: FormGroup;
  modalidadeEspaco: ModalidadeEspacoModel;

  constructor(private fb: FormBuilder, 
              private modalidadeEspacoService: ModalidadeEspacoService, 
              private router: Router, 
              private route: ActivatedRoute) {
    this.modalidadeEspaco = this.route.snapshot.data.entity || new ModalidadeEspacoModel();
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.modalidadeEspacoForm = this.fb.group({
      id: [this.modalidadeEspaco.id, []],
      nome: [this.modalidadeEspaco.nome, [Validators.required]],
      descricao: [this.modalidadeEspaco.descricao, [Validators.required]],
      situacao: [this.modalidadeEspaco.situacao, [Validators.required]]
    });
  }

  salvar() {
    if (!ReactiveFormsUtils.eval(this.modalidadeEspacoForm)) {
      ReactiveFormsUtils.markForm(this.modalidadeEspacoForm);
      return;
    }
    if (this.modalidadeEspaco.id) {
      this.modalidadeEspacoService.updateModalidadeEspaco(this.modalidadeEspaco.id, this.modalidadeEspacoForm.value)
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

  voltar(): void {
    history.go(-1);
  }
}
