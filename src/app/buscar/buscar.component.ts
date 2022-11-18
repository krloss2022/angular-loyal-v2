import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(
    private us:UserService
  ) { }

  ngOnInit(): void {

  }

  buscar(f:NgForm): void {
    const clave = f.controls['clave'].value;
    this.us.getUser(+clave);
  }
}
