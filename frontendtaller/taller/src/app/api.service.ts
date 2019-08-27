import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://localhost:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllLibros(): Observable<any>{
    return this.http.get(this.baseurl + '/api/Libro', { headers: this.httpHeaders});
  }

  getOneLibro(id): Observable<any>{
    return this.http.get(this.baseurl + '/api/Libro/'+ id + '/', { headers: this.httpHeaders});
  }
  updateLibro(libro): Observable<any>{
    const body = {Titulo: libro.Titulo, Isbn: libro.Isbn, Calificacion: libro.Calificacion };
    return this.http.put(this.baseurl + '/api/Libro/'+ libro.id + '/', body,
    { headers: this.httpHeaders});
  }
}
