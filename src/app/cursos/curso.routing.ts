import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CursosComponent } from './curso-component/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

export const CursosRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'cursos',
    children: [
      { path: '', component: CursosComponent },
      { path: ':id', component: CursoDetalheComponent }
    ]
  },
  { path: 'curso-nao-encontrado', component: NaoEncontradoComponent }
]);
