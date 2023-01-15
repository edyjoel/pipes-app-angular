export enum Color {
  Rojo,
  Verde,
  Azul,
  Amarillo,
}

export interface Heroe {
  nombre: string;
  vuela: boolean;
  color: Color;
}
