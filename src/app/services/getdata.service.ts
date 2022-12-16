import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inicio_, Tabs_, Capitulos_ } from '../tools/interface';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private dataHttp: HttpClient) { }

  getTabs() {
    return this.dataHttp.get<Tabs_[]>('/assets/data/tabs.json');
  }

  getInicio() {
    return this.dataHttp.get<Inicio_[]>('/assets/data/inicio.json');
  }

  getCapitulos(listar: boolean) {
    if (listar) {
      return this.dataHttp.get<Capitulos_[]>('/assets/data/capitulos.json').pipe(delay(1500));
    }
  }
  getBuscar() {
    return this.dataHttp.get<any[]>('/assets/data/capitulos.json').pipe(delay(1500));
  }
}