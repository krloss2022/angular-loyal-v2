import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  datos: any = {};
  constructor(
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.datos = this.activatedRouter.snapshot.data['datosDelProfile'];
  }

}
