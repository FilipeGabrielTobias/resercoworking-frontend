import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'src/app/security/guard/authentication.guard';
import { PerfilService } from 'src/app/services/domain/perfil.service';
import { ListarPerfilComponent } from './listar-perfil/listar-perfil.component';
import { ManterPerfilComponent } from './manter-perfil/manter-perfil.component';
import { VisualizarPerfilComponent } from './visualizar-perfil/visualizar-perfil.component';

const ROUTES = [
  { 
    path: '', 
    component: ListarPerfilComponent,
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard]
  },
  { 
    path: 'incluir', 
    component: ManterPerfilComponent, 
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard]
  },
  { 
    path: 'alterar/:id',
    resolve: {
      entity: PerfilService
    },
    component: ManterPerfilComponent, 
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard]
  },
  { 
    path: 'visualizar/:id', 
    resolve: {
      entity: PerfilService
    },
    component: VisualizarPerfilComponent, 
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard]
  }
];
export const perfilRoutes = ROUTES;
