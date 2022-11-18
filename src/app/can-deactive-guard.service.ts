import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface PuedeDesactivar {
  permitirSalir(): Observable<boolean> | Promise<boolean> | boolean
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactiveGuard implements CanDeactivate<PuedeDesactivar>{

  constructor() { }

  canDeactivate(component: PuedeDesactivar){
    return component.permitirSalir ? component.permitirSalir() : true;
  }
}
