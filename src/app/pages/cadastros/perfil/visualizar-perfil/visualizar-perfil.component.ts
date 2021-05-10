import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfilModel } from '../../../../models/perfil.model';

@Component({
  selector: 'app-visualizar-perfil',
  templateUrl: './visualizar-perfil.component.html',
  styleUrls: ['./visualizar-perfil.component.css']
})
export class VisualizarPerfilComponent implements OnInit {

  perfil: PerfilModel;

  constructor(private route: ActivatedRoute) 
  {
    this.perfil = this.route.snapshot.data.entity || new PerfilModel();
  }

  ngOnInit() {
  }

  voltar(): void {
    history.go(-1);
  }
}
