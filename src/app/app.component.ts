import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-loyal-v2';

  //inyectamos el Router
  constructor(
    private router: Router,
    private userservice:UserService
    ) {}

  navegarPorTS(): void {
    // /producto/1
    this.router.navigate(['/producto2','1']);
  }

  buscar(form: NgForm): void {
    //ejecutar la busqueda!
  }
}
