import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {
  nombre = 'Edy';
  genero = 'masculino';
  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Luis', 'Eduardo'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  cambiarCliente() {
    this.nombre = 'Maria';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  persona = {
    nombre: 'Edy',
    edad: 35,
    direccion: 'Calle falsa 123',
  };

  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
