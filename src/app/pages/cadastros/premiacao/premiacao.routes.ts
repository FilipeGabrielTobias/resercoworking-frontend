import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPremiacaoComponent } from './listar-premiacao/listar-premiacao.component';
import { ManterPremiacaoComponent } from './manter-premiacao/manter-premiacao.component';
import { VisualizarPremiacaoComponent } from './visualizar-premiacao/visualizar-premiacao.component';

const ROUTES = [
  { 
    path: '', 
    component: ListarPremiacaoComponent 
  },
  { 
    path: 'incluir', 
    component: ManterPremiacaoComponent 
  },
  { 
    path: 'alterar/:id', 
    component: ManterPremiacaoComponent 
  },
  { 
    path: 'visualizar/:id', 
    component: VisualizarPremiacaoComponent 
  },
];
export const premiacaoRoutes = ROUTES;
