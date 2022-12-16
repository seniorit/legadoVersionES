/* eslint-disable @typescript-eslint/dot-notation */
import { Component, ViewChild } from '@angular/core';
import { AlertController, IonRouterOutlet, Platform } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {

  @ViewChild(IonRouterOutlet, { static: true }) routerOutLet: IonRouterOutlet;

  constructor(
    private platForm: Platform,
    private location: Location,
    private alertCtrl: AlertController,
  ) {
    this.backButtonEvent();
  }

  backButtonEvent() {
    this.platForm.backButton.subscribeWithPriority(10, () => {
      if (!this.routerOutLet.canGoBack()) {
        this.backButtonAlert();
      } else {
        this.location.back();
      }
    });
  }

  async backButtonAlert() {
    const alert = await this.alertCtrl.create({
      message: '¿Desea Cerrar la Aplicación?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      }, {
        text: 'Aceptar',
        handler: () => {
         navigator['app'].exitApp();
        }
      }]
    });
    await alert.present();
  }
}