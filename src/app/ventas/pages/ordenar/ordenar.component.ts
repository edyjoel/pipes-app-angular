import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
})
export class OrdenarComponent {
  enMayusculas = true;
  ordenarPor = 'nombre';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.Azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.Amarillo,
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.Verde,
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.Rojo,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,

      color: Color.Verde,
    },
  ];

  toggleMayusculas() {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }
}
