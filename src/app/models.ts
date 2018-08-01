export interface Login {
  usuario: string;
  senha: string;
}

export interface Aluno {
  id: string;
  nome: string;
  email: string;
}

export interface Formulario {
  podeSair(): boolean;
}
