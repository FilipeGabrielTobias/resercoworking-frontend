import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { PremiacaoService } from 'src/app/services/domain/premiacao.service';
import { PremiacaoModel } from '../../../../models/premiacao.model';

@Component({
  selector: 'app-listar-premiacao',
  templateUrl: './listar-premiacao.component.html',
  styleUrls: ['./listar-premiacao.component.css']
})
export class ListarPremiacaoComponent implements OnInit {

  premiacoes: PremiacaoModel[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private premiacaoService: PremiacaoService) { }

  ngOnInit(): void {
    this.getPremiacoes();
  }

  getPremiacoes(): void {
    this.premiacaoService.getPremiacoes()
      .pipe(first())
      .subscribe(value => this.premiacoes = value);
  }

  visualizar(data): void {
    this.router.navigate(['./visualizar', data.id], {relativeTo: this.route});
  }

  alterar(data): void {
    this.router.navigate(['./alterar', data.id], {relativeTo: this.route});
  }

  excluir(id): void {
    this.premiacaoService.deletePremiacao(id)
      .subscribe(value => {
        this.getPremiacoes();
      });
  }
}
