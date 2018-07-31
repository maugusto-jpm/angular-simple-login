import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

export const AppRouting: ModuleWithProviders = RouterModule.forRoot([
  { path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule' },
  { path: 'alunos', loadChildren: './alunos/alunos.module#AlunosModule' },
  { path: '', component: HomeComponent },
  // { path: '**', redirectTo: '' },
  // /home/marcelo/Projetos/angular-simple-login/src/app/cursos/cursos.module.ts
  // /home/marcelo/Projetos/angular-simple-login/src/app/alunos/alunos.module.ts
  { path: 'login', component: LoginComponent }
]);
