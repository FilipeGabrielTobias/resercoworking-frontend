import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { PerfilService } from 'src/app/services/domain/perfil.service';
import { ReactiveFormsUtils } from 'src/app/shared/utils/reactive-forms.utils';
import { PerfilModel } from '../../../../models/perfil.model';
import { UsuarioService } from '../../../../services/domain/usuario.service';

@Component({
  selector: 'app-manter-usuario',
  templateUrl: './manter-usuario.component.html',
  styleUrls: ['./manter-usuario.component.css']
})
export class ManterUsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  perfis: PerfilModel[] = [];
  clienteCad: boolean;

  constructor(private fb: FormBuilder, 
              private UsuarioService: UsuarioService, 
              private perfilService: PerfilService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.queryParamMap.get('clienteCad')) {
      this.clienteCad = true;
    }
    this.perfilService.getPerfis().pipe(first()).subscribe(value => this.perfis = value);
    this.usuarioForm = this.fb.group({
      nome: [null, [Validators.required]],
      sobrenome: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      senha: [null, [Validators.required]],
      confirmacaoSenha: [null, [Validators.required, this.confirmationValidator]],
      perfil: [null, [Validators.required]]
    });
  }

  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.usuarioForm.controls.confirmacaoSenha.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.usuarioForm.controls.senha.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  salvar() {
    if (!ReactiveFormsUtils.eval(this.usuarioForm)) {
      return;
    }
    this.UsuarioService.saveUsuario(this.usuarioForm.value)
      .subscribe(value => {
        this.router.navigate(['/usuario']);
      })
  }

  voltar(): void {
    history.go(-1);
  }
}
