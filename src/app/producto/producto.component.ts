import { Component, OnInit } from '@angular/core';
import { Producto, ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  //selected id
  productId?: number;
  id?: number;

  //array de Producto, para mostrarlos en la vista (html)
  productos:Producto[] = [];

  constructor(
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    //snapshot
    //alert(JSON.stringify(this.activatedRoute.snapshot.params));

    //observable

    this.productos = this.productoService.getProductos();
  }

  cargarDetalle(id: number | undefined): void {
    this.productId = id || -1;
  }
}
