import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private route: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuarioService.getUsuarios()
      .pipe(first())
      .subscribe(value => this.usuarios = value);
  }
}
