import { ExitGuard } from './guards/exit.guard';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos-component/alunos.component';
import { FormComponent } from './form/form.component';
import { AdminGuard } from './guards/admin.guard';
import { LoadAlunoResolver } from './guards/load-aluno.resolver';

export const AlunosRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: AlunosComponent,
    canActivateChild: [AdminGuard],
    children: [
      { path: 'novo', component: FormComponent },
      { path: 'aluno-nao-encontrado', component: NaoEncontradoComponent },
      {
        path: ':id',
        component: AlunoDetalheComponent,
        resolve: { aluno: LoadAlunoResolver }
      },
      {
        path: ':id/editar',
        component: FormComponent,
        canDeactivate: [ExitGuard]
      }
    ]
  }
]);
