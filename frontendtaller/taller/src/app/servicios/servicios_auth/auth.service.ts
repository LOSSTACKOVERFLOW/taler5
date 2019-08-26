import { Injectable } from '@angular/core';
import {Usuario} from '../../modelos/usuario';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLog = false;
  private urlAPI = 'http://localhost:8000/api-token-auth/';
  private urlAPI2 = 'http://localhost:8000/userapi/auth/login/';


  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) { }

  isLog(){
    return this._isLog;
  }
   login(user:any){
    localStorage.removeItem('logindata');
    this._isLog=true;
    return this.http.post<any>(this.urlAPI2, user)
  }

  logout(){
     localStorage.removeItem('logindata');
     this.router.navigate(['']);
     return this.http.post<any>('http://localhost:8000/userapi/auth/logout/',null)
   
  }

  getloginData(){
    if(this.isloggedIn()){
      console.log(localStorage.getItem('logindata'))
      return JSON.parse(localStorage.getItem('logindata'));
    }
    return null;
  }
  getToken() {
    let data = this.getloginData();
    console.log(data);
    
    if(data!=null){
      console.log(data.token);
      return data.token;
    }
      
    else return '';
  }

 

  isloggedIn() {
    return !!localStorage.getItem('logindata');    
  }
}
