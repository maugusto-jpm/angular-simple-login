import { CursoService } from '../curso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: any[];
  constructor(
    private servico: CursoService
  ) { }

  ngOnInit() {
    this.cursos = this.servico.getCursos();
  }

  log(curso) {
    console.log(curso);
  }
}
