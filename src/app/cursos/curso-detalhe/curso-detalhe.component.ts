import { CursoService } from './../curso.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  curso: any;
  inscId: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servico: CursoService
  ) { }

  ngOnInit() {
    this.inscId = this.route.params.subscribe(
      (params) => {
        let id = params['id'];
        this.curso = this.servico.getCurso(id);

        if (this.curso == null){
          this.router.navigate(['curso-nao-encontrado']);
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscId.unsubscribe();
  }
}
