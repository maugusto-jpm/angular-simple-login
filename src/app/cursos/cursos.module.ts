import { CursoService } from './curso.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './curso-component/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosRouting } from './curso.routing';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

@NgModule({
  imports: [
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
  ],
  exports: [CursosComponent]
})
export class CursosModule { }
