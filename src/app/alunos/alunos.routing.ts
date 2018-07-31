import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { AlunosComponent } from './alunos-component/alunos.component';
import { FormComponent } from './form/form.component';

export const AlunosRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: AlunosComponent,
    children: [
      { path: 'novo', component: FormComponent },
      { path: 'aluno-nao-encontrado', component: NaoEncontradoComponent },
      { path: ':id', component: AlunoDetalheComponent },
      { path: ':id/editar', component: FormComponent }
    ]
  }
]);
