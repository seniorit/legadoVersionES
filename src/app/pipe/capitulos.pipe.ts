import { Pipe, PipeTransform } from '@angular/core';
import { FunctionService } from '../../app/services/function.service';

@Pipe({
  name: 'capitulos'
})
export class CapitulosPipe implements PipeTransform {

  constructor(
    private getfuncion: FunctionService
    ){}

  limpiarCadena(srt_: string){
    return this.getfuncion.quitarAcentos(srt_);
  };

  transform(arreglo: any[], texto: string, columna: string) {

    if (texto === '' || texto.length < 4) {return arreglo;}

    texto = texto.toLowerCase();

    return arreglo.filter((item) => {
      const cadena = this.limpiarCadena(item[columna]).toLowerCase();
      if (cadena.includes(texto)===false) {
      } else {
        return cadena.includes(texto);
      }
    });
  }


}
