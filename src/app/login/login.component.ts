import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { EventEmitter }from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[
    LoginService
  ]
})
export class LoginComponent implements OnInit, OnDestroy {
  //para recibir el valor desde el padre!
  @Input()
  user?: string;

  @Output()
  informarAlPadre = new EventEmitter<string>();

  useranme?:string;

  constructor(
    loginService: LoginService
  ) {
    console.log(loginService.getName());
  }

  ngOnInit(): void {
    this.useranme = this.user;
  }

  ngOnDestroy(): void {
    alert('se destruyeeeee');
  }

  emitirMensaje() {
    debugger;
    //emitimos el mensaje al padre
    this.informarAlPadre.emit('desde el hijo mando:' + this.useranme);
  }
}
