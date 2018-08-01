import { LoadAlunoResolver } from './guards/load-aluno.resolver';
import { ExitGuard } from './guards/exit.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunosRouting } from './alunos.routing';
import { AlunosComponent } from './alunos-component/alunos.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { AlunoService } from './aluno.service';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { FormComponent } from './form/form.component';
import { AdminGuard } from './guards/admin.guard';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    AlunosRouting
  ],
  declarations: [
    AlunosComponent,
    NaoEncontradoComponent,
    AlunoDetalheComponent,
    FormComponent
  ],
  providers: [
    AlunoService,
    AdminGuard,
    ExitGuard,
    LoadAlunoResolver
  ]
})
export class AlunosModule { }
