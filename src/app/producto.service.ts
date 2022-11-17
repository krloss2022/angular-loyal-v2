import { Injectable } from '@angular/core';

export interface Producto {
  id: number,
  titulo:string,
  precio: number,
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos:Producto[] = [];

  constructor() {
    this.productos.push(
      {
        id: 1,
        titulo: 'PRODUCTO',
        precio: Math.floor(1 + Math.random()),
        url: 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/699592.jpg'
      },
      {
        id: 2,
        titulo: 'PRODUCTO',
        precio: Math.floor(1 + Math.random()),
        url: 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/699593.jpg'
      },
      {
        id: 3,
        titulo: 'PRODUCTO',
        precio: Math.floor(1 + Math.random()),
        url: 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/699594.jpg'
      }
    );
  }

  getProductos(): Producto[] {
    return this.productos;
  }
}
