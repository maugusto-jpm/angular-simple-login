import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {
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
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscId.unsubscribe();
  }
}
