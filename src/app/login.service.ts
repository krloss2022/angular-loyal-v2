import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private name?: number;

  constructor() {
    this.name = Math.random();
  }

  getName(): number {
    return this.name || 0;
  }

}
