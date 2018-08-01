import { Injectable, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Login } from './models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logado = false;
  public UsuarioLogado = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  fazerLogin(login: Login) {
    if (login.usuario === 'marcelo' && login.senha === '1234') {
      this.logado = true;
      this.UsuarioLogado.emit(true);

      if (this.activatedRoute.snapshot.queryParams['returnTo']) {
        this.router.navigate([
          this.activatedRoute.snapshot.queryParams['returnTo']]);
      } else {
        this.router.navigate(['/']);
      }
    }
  }
  usuarioLogado(): boolean {
    return this.logado;
  }
}
