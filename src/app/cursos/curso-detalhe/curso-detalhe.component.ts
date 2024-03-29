import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servico: CursoService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.curso = this.servico.getCurso(id);

    if (this.curso == null) {
      this.router.navigate(
        ['../curso-nao-encontrado'],
        {relativeTo: this.route}
      );
    }
  }
}
