import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { NgForm } from '@angular/forms';
import { PuedeDesactivar } from '../can-deactive-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit, PuedeDesactivar{

  constructor(
    private us:UserService
  ) { }

  permitirSalir(): boolean | Observable<boolean> | Promise<boolean> {
    return confirm('Desea salir?');//true|false
  }

  ngOnInit(): void {

  }

  buscar(f:NgForm): void {
    const clave = f.controls['clave'].value;
    this.us.getUser(+clave);
  }
}
