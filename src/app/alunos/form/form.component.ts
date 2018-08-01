import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlunoService } from '../aluno.service';
import { Formulario } from '../../models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, Formulario {
  aluno: any;
  mudou = false;

  constructor(
    private route: ActivatedRoute,
    private servico: AlunoService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.aluno = this.servico.getCurso(id);

    if (this.aluno == null) {
      this.aluno = {};
    }
  }

  podeSair(): boolean {
    if (!this.mudou) {
      return true;
    }

    return confirm('Deseja realmente sair e descartar as alterações?');
  }
}
