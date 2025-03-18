import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-reemplazos',
  templateUrl: './gestion-reemplazos.component.html',
  styleUrls: ['./gestion-reemplazos.component.css']
})
export class GestionReemplazosComponent {
  reemplazos = {
    reemplazosPropuestos: 2,
    reemplazosSolicitados: 1
  };

  verDetalles() {
    // Lógica para navegar a la página de detalles de la gestión de reemplazos
    console.log('Ver detalles de la gestión de reemplazos');
  }
}
