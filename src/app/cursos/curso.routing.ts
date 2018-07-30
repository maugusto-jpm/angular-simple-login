import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";

export const CURSOS_ROUTING: ModuleWithProviders = RouterModule.forChild([
  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'curso-nao-encontrado', component: NaoEncontradoComponent }
]);