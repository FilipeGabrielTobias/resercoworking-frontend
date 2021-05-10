import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutDefaultComponent } from './theme/default/default.component';
import { SharedModule } from './shared/shared.module';
import { AuthenticationGuard } from './security/guard/authentication.guard';

const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full', 
    redirectTo: '/home' 
  },
  {
    path: 'auth',
    loadChildren: () => import('./security/authentication/authentication.module').then(m => m.AuthenticationModule) 
  },
  { 
    path: '', 
    component: LayoutDefaultComponent,
    canLoad: [AuthenticationGuard], 
    canActivate: [AuthenticationGuard], 
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      }, {
        path: 'usuario', 
        loadChildren: () => import('./pages/cadastros/usuario/usuario.module').then(m => m.UsuarioModule)
      },
      { 
        path: 'perfil', 
        loadChildren: () => import('./pages/cadastros/perfil/perfil.module').then(m => m.PerfilModule)
      },
      { 
        path: 'premiacao', 
        loadChildren: () => import('./pages/cadastros/premiacao/premiacao.module').then(m => m.PremiacaoModule) 
      },
      { 
        path: 'modalidadeEspaco', 
        loadChildren: () => import('./pages/cadastros/modalidade-espaco/modalidade-espaco.module').then(m => m.ModalidadeEspacoModule) 
      },
      { 
        path: 'espaco', 
        loadChildren: () => import('./pages/cadastros/espaco/espaco.module').then(m => m.EspacoModule) 
      },
      { 
        path: 'agendamentoEspaco', 
        loadChildren: () => import('./pages/agendamentos/agendamento-espaco/reserva-espaco.module').then(m => m.ReservaEspacoModule) 
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
