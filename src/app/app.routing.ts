import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

export const AppRouting: ModuleWithProviders = RouterModule.forRoot([
  {
    path: 'cursos',
    canActivate: [AuthGuard],
    loadChildren: './cursos/cursos.module#CursosModule'
  },
  {
    path: 'alunos',
    canActivate: [AuthGuard],
    loadChildren: './alunos/alunos.module#AlunosModule'
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    component: LoginComponent
  }
]);
