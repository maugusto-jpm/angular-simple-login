import { CursoService } from './curso.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CURSOS_ROUTING } from './curso.routing';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

@NgModule({
  imports: [
    CommonModule,
    CURSOS_ROUTING,
    TooltipModule.forRoot()
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    NaoEncontradoComponent
  ],
  providers: [CursoService],
  exports: [CursosComponent]
})
export class CursosModule { }
