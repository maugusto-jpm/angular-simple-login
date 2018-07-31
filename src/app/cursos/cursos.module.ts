import { CursoService } from './curso.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CursosRouting } from './curso.routing';
import { CursosComponent } from './curso-component/cursos.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    CursosRouting
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    NaoEncontradoComponent
  ],
  providers: [
    CursoService
  ]
})
export class CursosModule { }
