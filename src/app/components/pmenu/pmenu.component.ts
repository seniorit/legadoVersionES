import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AjusteComponent } from '../ajuste/ajuste.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { GraceComponent } from '../grace/grace.component';

@Component({
  selector: 'app-pmenu',
  templateUrl: './pmenu.component.html',
  styleUrls: ['./pmenu.component.scss'],
})
export class PmenuComponent {

  constructor(private modalCtrl: ModalController) { }

  async mostrarModal(componente: string){
    switch (componente) {
      case 'contac':
        const modalEvent1= await this.modalCtrl.create({
          component:ContactoComponent,
          animated:true,
        });
        await modalEvent1.present();
      break;

      case 'grace':
        const modalEvent2 = await this.modalCtrl.create({
          component:GraceComponent,
          animated:true,
        });
        await modalEvent2.present();
      break;

      case 'option':
        const modalEvent3 = await this.modalCtrl.create({
          component:AjusteComponent,
          animated:true,
        });
        await modalEvent3.present();
      break;
    }
  }

  cerrarModal(){
    this.modalCtrl.dismiss();
  }

}
