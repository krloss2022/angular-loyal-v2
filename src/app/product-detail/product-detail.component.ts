import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from './../../environments/environment';
import { User } from './user-dto';
import { UserService } from './../user.service';
import { PuedeDesactivar } from './../can-deactive-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit,PuedeDesactivar {

  user?: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    //private httpClient: HttpClient
    private userService: UserService
  ) { }

  permitirSalir(): boolean | Observable<boolean> | Promise<boolean> {
    return confirm('desea salir?');
  }


  ngOnInit(): void {

    //ir a buscar el detalle usando el httpclient (por ahora!)
    const id:number = this.activatedRoute.snapshot.params['id'];

    //ARMAR LA URL DEL RECURSO
    //https://reqres.in/api/users/2

    /*this.httpClient.get<User>(`${environment.reqResBaseUrl}/users/${id}`)
      .subscribe(
        data => {
          this.user = data;
        }
    );
    */
   debugger;
   //busqueda
   this.userService.getUser(id);

   //escucho el cambio
   this.userService.getCurrentUser().subscribe(
    data => this.user = data
   )
  }

  submitForm(formulario: NgForm){
    console.log(formulario);
  }
}
