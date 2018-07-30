import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }

  getCursos(): any[] {
    return [
      {id: '1', nome: 'Java'},
      {id: '2', nome: 'CSharp'},
      {id: '3', nome: 'Python'},
      {id: '4', nome: 'Angular 5'},
      {id: '5', nome: 'Node.JS'},
      {id: '6', nome: 'Vue.JS'}
    ];
  }

  getCurso(id: number) {
    const cursos = this.getCursos();

    for (let i = 0; i < cursos.length; i++) {
      if (cursos[i].id === id) {
        return cursos[i];
      }
    }

    return null;
  }
}
