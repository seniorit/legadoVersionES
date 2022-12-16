import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
//
import { AjusteComponent } from './ajuste/ajuste.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GraceComponent } from './grace/grace.component';
import { PcreditoComponent } from './pcredito/pcredito.component';
import { PmenuComponent } from './pmenu/pmenu.component';
import { HeaderComponent } from './header/header.component';
import { HeadercComponent } from './headerc/headerc.component';
import { FloatbuttonComponent } from './floatbutton/floatbutton.component';
import { FontcontrolComponent } from './fontcontrol/fontcontrol.component';
import { PipeModule } from '../pipe/pipe.module';
import { ListainicioComponent } from './listainicio/listainicio.component';
import { ListacapComponent } from './listacap/listacap.component';

@NgModule({
  declarations: [
    PcreditoComponent,
    PmenuComponent,
    AjusteComponent,
    GraceComponent,
    ContactoComponent,
    HeaderComponent,
    GraceComponent,
    HeadercComponent,
    FloatbuttonComponent,
    FontcontrolComponent,
    ListainicioComponent,
    ListacapComponent
  ],
  imports: [
    CommonModule, 
    IonicModule, 
    RouterModule,
    PipeModule],
  exports: [
    PcreditoComponent,
    PmenuComponent,
    AjusteComponent,
    GraceComponent,
    ContactoComponent,
    HeaderComponent,
    GraceComponent,
    HeadercComponent,
    FloatbuttonComponent,
    FontcontrolComponent,
    ListainicioComponent,
    ListacapComponent
  ],
})
export class ComponentsModule {}
