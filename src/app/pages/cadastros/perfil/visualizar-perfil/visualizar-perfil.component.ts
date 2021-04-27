import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfilService } from 'src/app/services/domain/perfil.service';
import { PerfilModel } from '../../../../models/perfil.model';

@Component({
  selector: 'app-visualizar-perfil',
  templateUrl: './visualizar-perfil.component.html',
  styleUrls: ['./visualizar-perfil.component.css']
})
export class VisualizarPerfilComponent implements OnInit {

  perfil: PerfilModel;

  constructor(private route: ActivatedRoute, private perfilService: PerfilService) { }

  ngOnInit() {
    this.perfilService.getPerfilById(this.route.snapshot.params.id)
      .subscribe(value => {
        this.perfil = value;
      })
  }

  voltar(): void {
    history.go(-1);
  }
}
