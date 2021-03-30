import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarModalidadeEspacoComponent } from './listar-modalidade-espaco/listar-modalidade-espaco.component';
import { ManterModalidadeEspacoComponent } from './manter-modalidade-espaco/manter-modalidade-espaco.component';
import { VisualizarModalidadeEspacoComponent } from './visualizar-modalidade-espaco/visualizar-modalidade-espaco.component';

const ROUTES = [
  {
    path: '', 
    component: ListarModalidadeEspacoComponent
  },
  {
    path: 'incluir', 
    component: ManterModalidadeEspacoComponent
  },
  {
    path: 'visualizar/:id', 
    component: VisualizarModalidadeEspacoComponent
  },
  {
    path: 'alterar/:id', 
    component: ManterModalidadeEspacoComponent
  },
];
export const modalidadeEspacoRoutes = ROUTES;
