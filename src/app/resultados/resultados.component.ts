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

  loaded = false;
  user?:User;
  userForm: FormGroup = this.formBuilder.group(
    {
      id: [''],
      email: [''],
      firstName: [''],
      lastName: ['']
    }
  );

  constructor(
    private us:UserService,
    private  formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.us.getCurrentUser().subscribe(
      data=>  {
        if(data) {
          this.user = data
          this.userForm.patchValue({
            id: data.data.id,
            email: data.data.email,
            firstName: data.data.first_name,
            lastName: data.data.last_name
          });
          this.loaded = true;
        }
      }
    );
  }

  onSubmit(): void {

  }
}
