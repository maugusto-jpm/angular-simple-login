import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Formulario } from '../../models';

@Injectable()
export class ExitGuard implements CanDeactivate<Formulario> {
  canDeactivate(
    component: Formulario,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return component.podeSair();
  }
}
