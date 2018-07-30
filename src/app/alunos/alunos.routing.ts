import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { CriarEditarComponent } from './criar-editar/criar-editar.component';
import { AlunosComponent } from './alunos-component/alunos.component';


export const AlunosRouting: ModuleWithProviders = RouterModule.forChild([
  { path: 'alunos', component: AlunosComponent },
  { path: 'alunos/novo', component: CriarEditarComponent },
  { path: 'alunos/aluno-nao-encontrado', component: NaoEncontradoComponent },
  {
    path: 'alunos/:id',
    children: [
      { path: '', component: AlunoDetalheComponent },
      { path: 'editar', component: CriarEditarComponent }
    ]
  }
]);