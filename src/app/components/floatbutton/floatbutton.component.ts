import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-floatbutton',
  templateUrl: './floatbutton.component.html',
  styleUrls: ['./floatbutton.component.scss'],
})
export class FloatbuttonComponent implements OnInit {

  constructor(private actionCtrl: ActionSheetController) { }

  ngOnInit() {}

  async presentActionSheet() {
    const actionSheet = await this.actionCtrl.create({
      header: 'Descarga PDF',
      cssClass: 'actionclass',
      backdropDismiss:false,
      buttons: [{
        text: 'Pagina de Descargas',
        role: 'destructive',
        icon: 'cloud-download-outline',
        handler: () => {
          console.log(location.href='https://www.flowcode.com/page/ellegado?demo=false');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
      }]
    });
    await actionSheet.present();
  }

}
