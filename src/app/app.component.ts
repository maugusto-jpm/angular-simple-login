import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  logado: boolean;

  constructor (
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.logado = this.authService.usuarioLogado();
    this.authService.UsuarioLogado.subscribe((logado) => this.logado = logado);
  }
}
