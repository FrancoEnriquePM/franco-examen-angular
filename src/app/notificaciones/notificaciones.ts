import { Component, signal } from '@angular/core';
import { Navbar } from "../shared/navbar/navbar";

@Component({
  selector: 'app-notificaciones',
  imports: [Navbar],
  templateUrl: './notificaciones.html',
  styleUrl: './notificaciones.scss'
})
export class Notificaciones {
// Señal para rastrear el estado actual del permiso de notificaciones.
  permissionStatus = signal<'granted' | 'denied' | 'default'>('default');
  isPermissionRequested = signal<boolean>(false);

  ngOnInit() {
    // Inicializa el estado con el permiso actual al cargar la aplicación.
    this.permissionStatus.set(Notification.permission);
  }

  // Método para solicitar el permiso de notificaciones al usuario.
  async requestPermission() {
    if ('Notification' in window) {
      this.isPermissionRequested.set(true);
      try {
        const permission = await Notification.requestPermission();
        this.permissionStatus.set(permission);
      } catch (error) {
        console.error('Error al solicitar permiso de notificación:', error);
        this.permissionStatus.set('denied');
      }
    } else {
      console.warn('Este navegador no soporta la API de Notificaciones.');
    }
  }

  // Método para mostrar una notificación si el permiso ha sido concedido.
  showNotification() {
    if (this.permissionStatus() === 'granted') {
      try {
        new Notification('Notificación de la PWA', {
          body: '¡La notificación funciona sin problemas!',
          icon: '/icons/icon-72x72.png' // Asegúrate de que esta ruta sea válida
        });
      } catch (error) {
        console.error('Error al mostrar la notificación:', error);
      }
    } else {
      console.warn('No se puede mostrar la notificación. Permiso denegado o no concedido.');
    }
  }

  // Ayuda a la interfaz de usuario a mostrar el estado del permiso.
  getPermissionStatusText() {
    switch (this.permissionStatus()) {
      case 'granted':
        return 'Permiso concedido';
      case 'denied':
        return 'Permiso denegado';
      default:
        return 'Permiso pendiente';
    }
  }
}
