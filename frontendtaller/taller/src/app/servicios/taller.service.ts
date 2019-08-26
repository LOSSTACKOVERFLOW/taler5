import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TallerService {
  private urlApiUser = 'http://127.0.0.1:8000/userapi/users/';

  constructor(private http: HttpClient) { }


  obtenerPerfilUsuario(idusuario: any){

    return this.http.get(this.urlApiUser + idusuario + '/' );

  }
}
