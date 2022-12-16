import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitulosPipe } from './capitulos.pipe';

@NgModule({
  declarations: [
    CapitulosPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CapitulosPipe
  ]
})
export class PipeModule { }
