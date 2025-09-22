import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { UiDemo } from './ui-demo/ui-demo';
import { Notificaciones } from './notificaciones/notificaciones';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ui', component: UiDemo },
  { path: 'notificaciones', component: Notificaciones },
  { path: '**', redirectTo: '' }
];
