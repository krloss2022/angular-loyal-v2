import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { User } from './../product-detail/user-dto';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  user?:User;

  constructor(
    private us:UserService
  ) { }

  ngOnInit(): void {
    this.us.getCurrentUser().subscribe(
      data=>  this.user = data
    );
  }

}
