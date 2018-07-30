import { Component, OnInit } from '@angular/core';

import { AlunoService } from './../aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunos: any[];

  constructor(
    private alunoService: AlunoService
  ) { }

  ngOnInit() {
    this.alunos = this.alunoService.getAlunos();
  }

}
