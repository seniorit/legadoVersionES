/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/prefer-for-of */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  constructor() { }

  zoomIn(selector: any) {
    const el = document.querySelectorAll(selector);
    for (let x = 0; x < el.length; x++) {
      const style = window.getComputedStyle(el[x], null).getPropertyValue('font-size');
      const fontSize = parseFloat(style);
      if (el[x].style.fontSize !== '33px') {
        el[x].style.fontSize = (fontSize + 1) + 'px';
      }
    }
  }

  zoomOut(selector: any) {
    const el = document.querySelectorAll(selector);
    for (let x = 0; x < el.length; x++) {
      const style = window.getComputedStyle(el[x], null).getPropertyValue('font-size');
      const fontSize = parseFloat(style);
      if (el[x].style.fontSize !== '7px') {
        el[x].style.fontSize = (fontSize - 1) + 'px';
      }
    }
  }

  quitarAcentos(cadenas: string) {
    const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
    return cadenas.split('').map(
      (letra: string) => acentos[letra] || letra)
      .join('').toString();
  }
}
