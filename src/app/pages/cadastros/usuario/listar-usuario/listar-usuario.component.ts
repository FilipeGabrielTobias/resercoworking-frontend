import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UsuarioModel } from '../../../../models/usuario.model';
import { UsuarioService } from '../../../../services/domain/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios: UsuarioModel[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuarioService.getUsuarios()
      .pipe(first())
      .subscribe(value => this.usuarios = value);
  }
  
  visualizar(data): void {
    this.router.navigate(['./visualizar', data.id], {relativeTo: this.route});
  }
}
