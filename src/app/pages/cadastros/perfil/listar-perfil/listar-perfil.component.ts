import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { PerfilService } from 'src/app/services/domain/perfil.service';
import { PerfilModel } from '../../../../models/perfil.model';

@Component({
  selector: 'app-listar-perfil',
  templateUrl: './listar-perfil.component.html',
  styleUrls: ['./listar-perfil.component.css']
})
export class ListarPerfilComponent implements OnInit {

  perfis: PerfilModel[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private perfilService: PerfilService) { }

  ngOnInit(): void {
    this.getPerfis();
  }

  getPerfis(): void {
    this.perfilService.getPerfis()
      .pipe(first())
      .subscribe(value => this.perfis = value);
  }

  visualizar(data): void {
    this.router.navigate(['./visualizar', data.id], {relativeTo: this.route});
  }

  alterar(data): void {
    this.router.navigate(['./alterar', data.id], {relativeTo: this.route});
  }

  excluir(id): void {
    this.perfilService.deletePerfil(id)
      .subscribe(value => {
        this.getPerfis();
      });
  }
}
