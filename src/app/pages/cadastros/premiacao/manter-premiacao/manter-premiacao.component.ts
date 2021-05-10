import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PremiacaoService } from 'src/app/services/domain/premiacao.service';
import { ReactiveFormsUtils } from 'src/app/shared/utils/reactive-forms.utils';
import { PremiacaoModel } from '../../../../models/premiacao.model';

@Component({
  selector: 'app-manter-premiacao',
  templateUrl: './manter-premiacao.component.html',
  styleUrls: ['./manter-premiacao.component.css']
})
export class ManterPremiacaoComponent implements OnInit {

  premiacaoForm: FormGroup;
  premiacao: PremiacaoModel;

  constructor(private fb: FormBuilder, 
              private premiacaoService: PremiacaoService, 
              private router: Router, 
              private route: ActivatedRoute) { 
    this.premiacao = this.route.snapshot.data.entity || new PremiacaoModel();
  }

  ngOnInit() {
    this.buidForm();
  }

  buidForm(): void {
    this.premiacaoForm = this.fb.group({
      id: [this.premiacao.id, []],
      nome: [this.premiacao.nome, [Validators.required]],
      descricao: [this.premiacao.descricao, [Validators.required]],
      pontosNecessarios: [this.premiacao.pontosNecessarios, [Validators.required]],
      situacao: [this.premiacao.situacao, [Validators.required]]
    });
  }

  salvar() {
    if (!ReactiveFormsUtils.eval(this.premiacaoForm)) {
      ReactiveFormsUtils.markForm(this.premiacaoForm);
    }
    if(this.premiacao.id) {
      this.premiacaoService.updatePremiacao(this.premiacao.id, this.premiacaoForm.value)
      .subscribe(value => {
        this.router.navigate(['/premiacao']);
      });
    } else {
      this.premiacaoService.savePremiacao(this.premiacaoForm.value)
        .subscribe(value => {
          this.router.navigate(['/premiacao']);
        });
    }
  }

  voltar(): void {
    history.go(-1);
  }
}
