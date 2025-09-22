# FrancoExamenAngular

Este proyecto a sido generado con [Angular CLI](https://github.com/angular/angular-cli) version 20.3.1.

## Este proyecto usa

Este proyecto utiliza **Tailwind CSS** como framework de estilos.

## Template

Se usó el template gratuito parallax-landing-page de [@egoistdeveloper], bajo licencia [MIT / Creative Commons].  
Fuente: https://www.creative-tim.com/twcomponents/component/parallax-landing-page

## Registro de pruebas offline

Fecha de la prueba: 22/09/2025
Entorno: Producción
Resultados: Se comprobó la carga completa de la página de inicio sin conexión a Internet, después de que el Service Worker se activó. El precaching de los archivos principales funcionó correctamente.

Herramientas: ng build y luego npx http-server dist/franco-examen-angular/browser
