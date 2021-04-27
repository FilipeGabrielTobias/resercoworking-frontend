import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilService } from 'src/app/services/domain/perfil.service';
import { ReactiveFormsUtils } from 'src/app/shared/utils/reactive-forms.utils';
import { PerfilModel } from '../../../../models/perfil.model';

@Component({
  selector: 'app-manter-perfil',
  templateUrl: './manter-perfil.component.html',
  styleUrls: ['./manter-perfil.component.css']
})
export class ManterPerfilComponent implements OnInit {

  perfilForm: FormGroup;
  perfil: PerfilModel;

  constructor(private fb: FormBuilder, private perfilService: PerfilService, private router: Router, private route: ActivatedRoute) {
    this.perfil = route.snapshot.data.entity || new PerfilModel();
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.perfilForm = this.fb.group({
      id: [this.perfil.id, []],
      nome: [this.perfil.nome, [Validators.required]],
      descricao: [this.perfil.descricao, [Validators.required]],
    });
  }

  salvar() {
    if (!ReactiveFormsUtils.eval(this.perfilForm)) {
      ReactiveFormsUtils.markForm(this.perfilForm);
      return;
    }
    if (this.perfil.id) {
      this.perfilService.updatePerfil(this.perfil.id, this.perfilForm.value)
        .subscribe(() => {
          this.router.navigate(['/perfil']);
        });
    } else {
      this.perfilService.savePerfil(this.perfilForm.value)
        .subscribe(() => {
          this.router.navigate(['/perfil']);
        });
    }
  }

  voltar(): void {
    history.go(-1);
  }

}
