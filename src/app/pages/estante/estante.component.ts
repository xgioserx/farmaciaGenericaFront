import { Component, OnInit } from '@angular/core';
import { ModelEstantes } from 'src/app/models/estantes';
import { HelperService } from 'src/app/util/HelperService';


@Component({
  selector: 'app-estante',
  templateUrl: './estante.component.html',
  styleUrls: ['./estante.component.css']
})
export class EstanteComponent implements OnInit {
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
