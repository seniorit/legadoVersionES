/* eslint-disable @typescript-eslint/dot-notation */
import { Component} from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.page.html',
  styleUrls: ['./portada.page.scss'],
})
export class PortadaPage {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

}
