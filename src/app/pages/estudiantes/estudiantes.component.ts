import { Component, OnInit } from '@angular/core';
import { ModelEstudiante } from 'src/app/models/estudiantes';
import { HelperService } from 'src/app/util/HelperService';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  estudiantes: ModelEstudiante[] = [];
  estudianteData = {} as ModelEstudiante;

  constructor(
    public helperService: HelperService,
    public estudianteService: EstudiantesService) { }

  ngOnInit() {
      this.listarEstudiantes();
  }



  
  listarEstudiantes() {
    /*Se llama al metodo de listar roles definido en el servicio*/
    this.estudianteService.listarEstudiantes().subscribe(
      (data) => {
        let respuesta: any;
        respuesta = data;

        if (respuesta.msj === "Success") {
          /*Se convierte en un objeto JSON el listado de datos obtenido*/
          this.estudiantes = JSON.parse(respuesta.data);
        } else {
          this.estudiantes = [];
        }
      },
      (error) => {
        this.helperService.openModal(
          true,
          "Info",
          "Error consumiendo el servicio"
        );
      }
    );
  }



  guardarEstudiante() {
    /*Funcion que se encarga de almacenar la informacion del rol*/
    let postDataObj = new FormData();
    postDataObj.append("id", this.estudianteData.id);
    postDataObj.append("codigo", this.estudianteData.codigo);
    postDataObj.append("nombre", this.estudianteData.nombre);
    postDataObj.append("apellido", this.estudianteData.apellido);
    postDataObj.append("cedula", this.estudianteData.cedula);
    postDataObj.append("edad", this.estudianteData.edad);
    postDataObj.append("semestre", this.estudianteData.semestre);

    if (this.helperService.isValidValue(this.estudianteData.id)) {
      postDataObj.append("type", "update");
    } else {
      postDataObj.append("type", "save");
    }

    this.estudianteService.guardarEstudiante(postDataObj).subscribe(
      (data) => {
        let respuesta: any;
        respuesta = data;

        if (respuesta.res === "Success") {
          this.helperService.openModal(true, "Info", "Guardado exitosamente");
          this.listarEstudiantes();
          this.limpiarEstudiante();
        } else {
          this.helperService.openModal(
            true,
            "Info",
            "No se detecto ningun cambio en la base de datos"
          );
        }
      },
      (error) => {
        this.helperService.openModal(
          true,
          "Info",
          "Error consumiendo el servicio"
        );
      }
    );
  }

  
  buscarEstudiante(codigo) {

    let postDataObj = new FormData();

    postDataObj.append("codigo", codigo);
    postDataObj.append("type", "search");

    this.estudianteService.buscarEstudiante(postDataObj).subscribe(
      (data) => {
        let respuesta: any;
        respuesta = data;

        if (respuesta.msj === "Success") {
          this.helperService.openModal(true, "Info", "Encontrado exitosamente");
          this.estudianteData = JSON.parse(respuesta.data)[0];
        } else {
          this.helperService.openModal(true, "Info", "No se encontro");
        }
      },
      (error) => {
        this.helperService.openModal(
          true,
          "Info",
          "Error consumiendo el servicio"
        );
      }
    );
  }




  eliminarEstudiante() {
    /*Funcion que se encarga de almacenar la informacion del rol*/
    let postDataObj = new FormData();
    postDataObj.append("id", this.estudianteData.id);

    postDataObj.append("type", "delete");

    this.estudianteService.eliminarEstudiante(postDataObj).subscribe(
      (data) => {
        let respuesta: any;
        respuesta = data;

        if (respuesta.res === "Success") {
          this.helperService.openModal(true, "Info", "Eliminado exitosamente");
          this.listarEstudiantes();
          this.limpiarEstudiante();
        } else {
          this.helperService.openModal(
            true,
            "Info",
            "No se encontro el registro a eliminar"
          );
        }
      },
      (error) => {
        this.helperService.openModal(
          true,
          "Info",
          "Error consumiendo el servicio"
        );
      }
    );
  }



  limpiarEstudiante() {
    this.estudianteData = {} as ModelEstudiante;
  }

}
