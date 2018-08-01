import { AlunoService } from '../aluno.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Aluno } from '../../models';

@Injectable()
export class LoadAlunoResolver implements Resolve<Aluno> {
  constructor(
    private alunoService: AlunoService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {

    return this.alunoService.getCurso(
      route.params['id']);
  }
}
