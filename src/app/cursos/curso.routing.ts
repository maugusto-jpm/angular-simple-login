import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CursosComponent } from './curso-component/cursos.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

export const CursosRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'cursos',
    component: CursosComponent,
    children: [
      { path: 'curso-nao-encontrado', component: NaoEncontradoComponent },
      { path: ':id', component: CursoDetalheComponent }
    ]
  },
]);
