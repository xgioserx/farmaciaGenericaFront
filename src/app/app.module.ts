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
import { ProveedorComponent } from './pages/proveedor/proveedor.component';
import { LoginComponent } from './pages/login/login.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { EstantesComponent } from './pages/estantes/estantes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    EstudiantesComponent,
    ProveedorComponent,
    LoginComponent,
    ClientesComponent,
    EmpleadoComponent,
    EstantesComponent
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
