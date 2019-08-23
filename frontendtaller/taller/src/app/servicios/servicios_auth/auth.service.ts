import { Injectable } from '@angular/core';
import {Usuario} from '../../modelos/usuario';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLog = false;
  private urlAPI = 'http://localhost:8000/api-token-auth/';


  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) { }

  estaLogeado() {
    return this.isLog;
   }
  public login(userInfo: Usuario) {
    this.isLog = true;
    return this.http.post<any>(this.urlAPI , userInfo);
  }

  public isLoggedIn() {
    return localStorage.getItem('login') !== null;

  }
  getToken() {
    const data = this.getloginData();
    console.log(data);
    if (data != null) {
      return data;
    } else { return ''; }
  }

  getloginData() {
    if (this.isLoggedIn()) {
      return JSON.parse(localStorage.getItem('login'));
    }
    return null;
  }

  public logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('logindata');
    this.router.navigate(['']);
    // this.cookieService.deleteAll();
   // return this.http.post(this.urlAPI + 'logout/', '');
  }
}
