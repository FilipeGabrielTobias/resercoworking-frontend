import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilService } from 'src/app/services/domain/perfil.service';
import { PerfilModel } from '../../../../models/perfil.model';

@Component({
  selector: 'app-manter-perfil',
  templateUrl: './manter-perfil.component.html',
  styleUrls: ['./manter-perfil.component.css']
})
export class ManterPerfilComponent implements OnInit {

  perfilForm: FormGroup;
  perfil: PerfilModel = new PerfilModel();

  constructor(private fb: FormBuilder, private perfilService: PerfilService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.params.id) {
      this.perfilService.getPerfilById(this.route.snapshot.params.id)
        .subscribe(value => {
          this.perfil = value;
          this.buildForm();
        });
    } else {
      this.buildForm();
    }
  }

  buildForm(): void {
    this.perfilForm = this.fb.group({
      id: [this.perfil.id, []],
      nome: [this.perfil.nome, [Validators.required]],
      descricao: [this.perfil.descricao, []],
    });
  }

  salvar() {
    if (this.route.snapshot.params.id) {
      this.perfilService.updatePerfil(this.route.snapshot.params.id, this.perfilForm.value)
        .subscribe(value => {
          this.router.navigate(['/perfil']);
        });
    } else {
      this.perfilService.savePerfil(this.perfilForm.value)
        .subscribe(value => {
          this.router.navigate(['/perfil']);
        });
    }
  }

}
