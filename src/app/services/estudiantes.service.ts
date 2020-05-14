import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../util/HelperService';
import { ModelEstudiante } from '../models/estudiantes';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {


  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, public helperService: HelperService) { }

  
  listarEstudiantes() {
    return this.http.get<ModelEstudiante>(
      this.baseUrl + "Controlador/gestionEstudiante.php?type=list"
    );
  }

  guardarEstudiante(postData: any) {
    return this.http.post<any>(this.baseUrl + "Controlador/gestionEstudiante.php", postData);
  }

  buscarEstudiante(postData: any) {
    const url = this.baseUrl + "Controlador/gestionEstudiante.php";
    return this.http.post<any>(url, postData);
  }

  eliminarEstudiante(postData: any) {
    const url = this.baseUrl + "Controlador/gestionEstudiante.php";
    return this.http.post<any>(url, postData);
  }

}
