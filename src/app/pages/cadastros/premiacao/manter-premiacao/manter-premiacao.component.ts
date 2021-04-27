import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PremiacaoService } from 'src/app/services/domain/premiacao.service';
import { PremiacaoModel } from '../../../../models/premiacao.model';

@Component({
  selector: 'app-manter-premiacao',
  templateUrl: './manter-premiacao.component.html',
  styleUrls: ['./manter-premiacao.component.css']
})
export class ManterPremiacaoComponent implements OnInit {

  premiacaoForm: FormGroup;
  premiacao: PremiacaoModel = new PremiacaoModel();

  constructor(private fb: FormBuilder, private premiacaoService: PremiacaoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.params.id) {
      this.premiacaoService.getPremiacaoById(this.route.snapshot.params.id)
        .subscribe(value => {
          this.premiacao = value;
          this.buidForm();
        })
    } else {
      this.buidForm();
    }
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
    if(this.route.snapshot.params.id) {
      this.premiacaoService.updatePremiacao(this.route.snapshot.params.id, this.premiacaoForm.value)
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
