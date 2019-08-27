import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/servicios_auth/auth.service';
import {TallerService} from '../servicios/taller.service'
import { Router } from '@angular/router';

import {ApiService} from 'src/app/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ApiService]
})

export class AdminComponent implements OnInit {
  user = '';
  nombre = '';
  apellido = '';
  cedula ='';
  fechanac = '';
  perfil: any;

  libros = [{Titulo: 'HP'},{Titulo: 'HP2'}];
  libroElegido;
 
  constructor(private authService: AuthService, private router: Router, private service: TallerService, private api:ApiService) {
    this.getLibros();
    this.libroElegido = {id: -1, Titulo: '', Isbn: '', Calificacion: 0 };
   }


  getLibros = () => {
    this.api.getAllLibros().subscribe(
      data => {
        this.libros = data;
        
      },
      error =>{
        console.log(error);
      }
  )}

  libroClicked = (libro) => {
    this.api.getOneLibro(libro.id).subscribe(
      data => {
        this.libroElegido = data;
      },
      error =>{
        console.log(error);
      }
    );
  }

  updateLibro = () =>{
    this.api.updateLibro(this.libroElegido).subscribe(
      data => {
        this.libroElegido = data;
      },
      error =>{
        console.log(error);
      }
    );
  }


  ngOnInit() {
    this.mostrarPerfil();
  }

  logout(){
    this.authService.logout()
    .subscribe(
      res => {
        console.log(res);
         this.router.navigateByUrl('/login');
         }
    )

  }


  mostrarPerfil(){

    // this.user = this.authService.getloginData().user.username;
    // this.nombre = this.authService.getloginData().user.first_name;
    // this.apellido = this.authService.getloginData().user.last_name;
    // tslint:disable-next-line: prefer-const
    let idusuario = String(this.authService.getloginData().user.pk);
    console.log(idusuario);
    this.service.obtenerPerfilUsuario(idusuario)
    .subscribe(
      res => {
        console.log(res);
        this.perfil = res;
        console.log(this.perfil.profile.cedula)
        this.nombre = this.perfil.first_name;
        this.apellido = this.perfil.last_name;
        this.cedula = this.perfil.profile.cedula;
        this.fechanac = this.perfil.profile.fecha_nacimiento;

      }
    )


  }


}
