import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,  private router: Router) {}
  canActivate(): boolean {


    if (this.authService.isLoggedIn()) {
      console.log('logeado');
      // tslint:disable-next-line: no-unused-expression
      this.router.navigate['/admin'];
      return true;
    } else {
      console.log('no logeado')
      this.router.navigate(['']);
      return false;
    }
  }
}
