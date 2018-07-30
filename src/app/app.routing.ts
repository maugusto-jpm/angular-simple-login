import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

export const AppRouting: ModuleWithProviders = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  // { path: '**', redirectTo: '' },
  { path: 'login', component: LoginComponent }
]);
