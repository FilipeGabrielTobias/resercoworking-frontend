import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PremiacaoService } from 'src/app/services/domain/premiacao.service';
import { PremiacaoModel } from '../../../../models/premiacao.model';

@Component({
  selector: 'app-visualizar-premiacao',
  templateUrl: './visualizar-premiacao.component.html',
  styleUrls: ['./visualizar-premiacao.component.css']
})
export class VisualizarPremiacaoComponent implements OnInit {

  premiacao: PremiacaoModel;

  constructor(private route: ActivatedRoute, private premiacaoService: PremiacaoService) { }

  ngOnInit() {
    this.premiacaoService.getPremiacaoById(this.route.snapshot.params.id)
      .subscribe(value => {
        this.premiacao = value;
      })
  }
}
