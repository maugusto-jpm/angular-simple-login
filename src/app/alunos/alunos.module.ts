import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRouting } from './alunos.routing';
import { AlunosComponent } from './alunos-component/alunos.component';
import { CriarEditarComponent } from './criar-editar/criar-editar.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { AlunoService } from './aluno.service';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    AlunosRouting
  ],
  declarations: [
    AlunosComponent,
    CriarEditarComponent,
    NaoEncontradoComponent,
    AlunoDetalheComponent
  ],
  providers: [
    AlunoService
  ]
})
export class AlunosModule { }
