import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  curso: any;
  subscId: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servico: CursoService
  ) { }

  ngOnInit() {
    this.subscId = this.route.params.subscribe(
      (params) => {
        const id = params['id'];
        this.curso = this.servico.getCurso(id);

        if (this.curso == null) {
          this.router.navigate(
            ['../curso-nao-encontrado'],
            {relativeTo: this.route}
          );
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscId.unsubscribe();
  }
}
