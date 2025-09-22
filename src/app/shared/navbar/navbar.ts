import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
// Señal para controlar la visibilidad del menú móvil
  showMobileMenu = signal(false);

  // Función para alternar la visibilidad
  toggleMobileMenu(): void {
    this.showMobileMenu.update(value => !value);
  }
}
