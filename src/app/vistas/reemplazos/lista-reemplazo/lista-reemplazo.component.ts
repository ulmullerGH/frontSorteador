import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-reemplazo',
  templateUrl: './lista-reemplazo.component.html',
  styleUrls: ['./lista-reemplazo.component.css']
})
export class ListaReemplazoComponent {
  reemplazos = [
    { id: 1, solicitante: 'Juan Pérez', fechaSolicitud: '09/03/2024', fechaReemplazo: '14/03/2024', reemplazoPropuesto: 'Carlos Torres', estado: 'Pendiente' },
    { id: 2, solicitante: 'Ana Gómez', fechaSolicitud: '12/03/2024', fechaReemplazo: '16/03/2024', reemplazoPropuesto: 'Martin Burres', estado: 'Aprobado' },
    { id: 3, solicitante: 'Carlos López', fechaSolicitud: '13/03/2024', fechaReemplazo: '20/03/2024', reemplazoPropuesto: 'Nicolas Lirres', estado: 'Rechazado' }
  ];

  getEstadoClass(estado: string): string {
    switch (estado.toLowerCase()) {
      case 'aprobado':
        return 'estado-aprobado';
      case 'rechazado':
        return 'estado-rechazado';
      case 'pendiente':
        return 'estado-pendiente';
      default:
        return '';
    }
  }

  verDetalle(id: number) {
    console.log(`Ver detalles del reemplazo con ID: ${id}`);
  }
}
