import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilService } from 'src/app/services/domain/perfil.service';
import { ListarPerfilComponent } from './listar-perfil/listar-perfil.component';
import { ManterPerfilComponent } from './manter-perfil/manter-perfil.component';
import { VisualizarPerfilComponent } from './visualizar-perfil/visualizar-perfil.component';

const ROUTES = [
  { 
    path: '', 
    component: ListarPerfilComponent 
  },
  { 
    path: 'incluir', 
    component: ManterPerfilComponent, 
    // canLoad: [LoggedInGuard], 
    // canActivate: [LoggedInGuard]
  },
  { 
    path: 'alterar/:id',
    resolve: {
      entity: PerfilService
    },
    component: ManterPerfilComponent, 
    
    // canLoad: [LoggedInGuard], 
    // canActivate: [LoggedInGuard]
  },
  { 
    path: 'visualizar/:id', 
    component: VisualizarPerfilComponent, 
    // canLoad: [LoggedInGuard], 
    // canActivate: [LoggedInGuard]
  }
];
export const perfilRoutes = ROUTES;
