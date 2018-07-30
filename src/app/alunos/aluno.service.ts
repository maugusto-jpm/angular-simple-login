import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor() { }

  getAlunos(): any[] {
    return [
      {id: '1', nome: 'Ana Lúcia'},
      {id: '2', nome: 'Laís'},
      {id: '3', nome: 'Cláudio'},
      {id: '4', nome: 'Ricardo'},
      {id: '5', nome: 'Gustavo'},
      {id: '6', nome: 'Alessandra'}
    ];
  }

  getCurso(id: number) {
    const alunos = this.getAlunos();

    for (let i = 0; i < alunos.length; i++) {
      if (alunos[i].id === id) {
        return alunos[i];
      }
    }

    return null;
  }
}
