import { Component, OnInit } from '@angular/core';
import { ModelEstantes } from 'src/app/models/estantes';
import { HelperService } from 'src/app/util/HelperService';


@Component({
  selector: 'app-estante',
  templateUrl: './estantes.component.html',
  styleUrls: ['./estantes.component.css']
})
export class EstantesComponent implements OnInit {
  estantes: ModelEstantes[] = [];
  estanteData = {} as ModelEstantes;
  constructor(
    public helperService: HelperService,
  ) { }

  ngOnInit(): void {
  }


  buscarEstante() {
  }

  guardarEstante(){

  }

  eliminarEstante(){

  }


}
