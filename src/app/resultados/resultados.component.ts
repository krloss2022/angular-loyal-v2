import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { User } from './../product-detail/user-dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  user?:User;
  userForm: FormGroup = this.formBuilder.group(
    {
      id: [''],
      email: [''],
      firtName: ['']
    }
  );

  constructor(
    private us:UserService,
    private  formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.us.getCurrentUser().subscribe(
      data=>  this.user = data
    );
  }

  onSubmit(): void {

  }
}
