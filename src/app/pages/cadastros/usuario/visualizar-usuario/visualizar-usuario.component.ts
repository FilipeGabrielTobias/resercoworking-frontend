import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-visualizar-usuario',
  templateUrl: './visualizar-usuario.component.html',
  styleUrls: ['./visualizar-usuario.component.css']
})
export class VisualizarUsuarioComponent implements OnInit {

  usuario: UsuarioModel;

  constructor(private route: ActivatedRoute) {
    this.usuario = this.route.snapshot.data.entity || new UsuarioModel();
  }

  ngOnInit() {
  }

  voltar(): void {
    history.go(-1);
  }
}
