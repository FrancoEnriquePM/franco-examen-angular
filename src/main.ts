import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { isDevMode } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

// Registrar el Service Worker solo en el entorno de producción
if (!isDevMode()) {
  provideServiceWorker('ngsw-worker.js', {
    enabled: true,
    // La configuración para los Service Worker solo se ejecuta
    // cuando la aplicación se estabiliza.
    registrationStrategy: 'registerWhenStable:30000'
  });
}