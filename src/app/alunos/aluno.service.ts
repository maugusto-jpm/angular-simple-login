import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor() {
  }

  getAlunos(): any[] {
    return [
      {id: '1', nome: 'Ana Lúcia', email: 'ana.lucia@email.com.br'},
      {id: '2', nome: 'Laís', email: 'lais-lac@email.com.br'},
      {id: '3', nome: 'Cláudio', email: 'claudio-ne@email.com.br'},
      {id: '4', nome: 'Ricardo', email: 'ric-25@email.com.br'},
      {id: '5', nome: 'Gustavo', email: 'gustavo-gus@email.com.br'},
      {id: '6', nome: 'Alessandra', email: 'ale.sandra@email.com.br'}
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
