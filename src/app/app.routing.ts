import { CursosComponent } from './cursos/cursos.component';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '../../node_modules/@angular/compiler/src/core';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';

export const MAIN_ROUTING: ModuleWithProviders = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoDetalheComponent }
]);