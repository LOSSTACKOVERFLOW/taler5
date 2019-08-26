import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './servicios/servicios_auth/auth.service';
import { AuthGuard } from './servicios/servicios_auth/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import {CookieService} from 'ngx-cookie-service'
import { TokenInterceptorService } from './servicios/servicios_auth/token-interceptor';
import {TallerService} from './servicios/taller.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService, AuthGuard, HttpClientModule, CookieService, TokenInterceptorService, TallerService,
    {

        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true

    }
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
