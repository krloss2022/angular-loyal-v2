import { Component } from '@angular/core';
import { LoginService } from './login.service';

export interface Lengauaje {
  name:string,
  id:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-loyal-v2';
  mostarTexto = true;
  lenguajes:Lengauaje[] = [
    {
      id:1,
      name: 'java',
    },
    {
      id:2,
      name: 'js',
    },
    {
      id:3,
      name: 'angular'
    }
  ];

  showLogin = true;

  constructor(
    private loginService: LoginService
  ) {
    console.log(this.loginService.getName());
  }

  getTitle(): string {
    return this.title;
  }

  cambiar(): void {
    this.mostarTexto = ! this.mostarTexto;
  }

  mostrarLogin(): void {
    this.showLogin = true;
  }
  ocultarLogin() : void {
    this.showLogin = false;
  }

  recibirMensaje(event:any) {
    debugger;
    alert(event);
  }
}
