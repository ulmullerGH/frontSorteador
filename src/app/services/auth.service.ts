import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '1234') {
      this.authenticated = true;
      console.log("🔐 Usuario autenticado: ", this.authenticated);
      return true;
    }
    console.log("❌ Autenticación fallida");
    return false;
  }

  logout(): void {
    this.authenticated = false;
    console.log("🚪 Usuario desautenticado");
  }

  isUserAuthenticated(): boolean {
    console.log("🔍 Estado de autenticación: ", this.authenticated);
    return this.authenticated;
  }
}
