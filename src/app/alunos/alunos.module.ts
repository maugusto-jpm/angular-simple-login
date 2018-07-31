import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunosRouting } from './alunos.routing';
import { AlunosComponent } from './alunos-component/alunos.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { AlunoService } from './aluno.service';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { FormComponent } from './form/form.component';

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
    AlunoService
  ]
})
export class AlunosModule { }
