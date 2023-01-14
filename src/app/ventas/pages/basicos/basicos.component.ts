import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {
  nombreLower = 'edy';
  nombreUpper = 'EDY';
  nombreCompleto = 'eDy JOel';

  fecha: Date = new Date(); // El día de hoy
}
