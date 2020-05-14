import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/*IMPORT NECESARIO PARA TRABAJAR CON EL NG-MODEL*/
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*IMPORT NECESARIO PARA LAS PETICIONES HTTP*/
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
<<<<<<< HEAD
import { ProveedorComponent } from './pages/proveedor/proveedor.component';
=======
import { LoginComponent } from './pages/login/login.component';
>>>>>>> cdb58936fc92d74952d60bf009a8b1fad6085983

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    EstudiantesComponent,
<<<<<<< HEAD
    ProveedorComponent
=======
    LoginComponent
>>>>>>> cdb58936fc92d74952d60bf009a8b1fad6085983
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
