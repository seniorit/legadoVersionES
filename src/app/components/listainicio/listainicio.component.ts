import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetdataService } from 'src/app/services/getdata.service';
import { Inicio_ } from 'src/app/tools/interface';

@Component({
  selector: 'app-listainicio',
  templateUrl: './listainicio.component.html',
  styleUrls: ['./listainicio.component.scss'],
})
export class ListainicioComponent implements OnInit {

  arrayLista: Observable<Inicio_[]>;

  constructor(private dtListaInicio: GetdataService) { }

  ngOnInit() {
    this.arrayLista = this.dtListaInicio.getInicio();
  }

}



