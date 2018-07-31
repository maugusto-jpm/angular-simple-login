import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../aluno.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  aluno: any;
  subscId: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servico: AlunoService
  ) { }

  ngOnInit() {
    this.subscId = this.route.params.subscribe(
      (params) => {
        const id = params['id'];
        this.aluno = this.servico.getCurso(id);

        if (this.aluno == null) {
          console.log('Redirecionando...');
          console.log(this.router.url);
          this.router.navigate(
            ['../../aluno-nao-encontrado'],
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
