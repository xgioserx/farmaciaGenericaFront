import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/*IMPORT NECESARIO PARA TRABAJAR CON EL NG-MODEL*/
import { FormsModule } from '@angular/forms';

/*IMPORT NECESARIO PARA LAS PETICIONES HTTP*/
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    EstudiantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
