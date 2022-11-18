import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './product-detail/user-dto';
import { environment } from './../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userInicial: User = {
    data: {
      avatar:'',
      email:'',
      id: 0,
      last_name: '',
      first_name: ''
    },
    support: {
      text: '',
      url: ''
    }
  };
  private user = new BehaviorSubject<User>(null as unknown as User); // null as unknown as User
  private currentUser:Observable<User> = this.user.asObservable();
  //ngrx

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(id:number):void {
    this.httpClient.get<User>(`${environment.reqResBaseUrl}/users/${id}`)
    .subscribe(
      data => this.user.next(data)
    );
    // hace busqueda
    // consultar el api > json >
    // cambiar el estado del user .next()
  }

  getCurrentUser(): Observable<User> {
    return this.currentUser;
  }

}
