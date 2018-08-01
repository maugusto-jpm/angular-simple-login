import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      console.log('Verificando se pode entrar...');
    if (this.authService.usuarioLogado()) {
      return true;
    }

    if (state.url === '/') {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          returnTo: state.url
        }
      });
    }

    return false;
  }
}
