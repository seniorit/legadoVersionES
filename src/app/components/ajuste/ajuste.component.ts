import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, ToastController, IonToggle } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-ajuste',
  templateUrl: './ajuste.component.html',
  styleUrls: ['./ajuste.component.scss'],
})
export class AjusteComponent implements OnInit {

  loadingEvent: any;
  activeCheck: string = "check";

  constructor(
    private modalCtrl: ModalController,
    private laodCtrl: LoadingController,
    private toastCtrl: ToastController,
    private localDt: StorageService
  ) {
  }

  getAttributeCheck() {
    let toggleCheck = document.querySelector("#notificacion");
    let active: string;

    if (this.localDt.get(this.activeCheck) !== null) {
      active = this.localDt.get(this.activeCheck);
      toggleCheck.setAttribute("checked", active);
    } else {
      active = "false"
      this.localDt.set(this.activeCheck, active)
      toggleCheck.setAttribute("checked", active);
    }
  }

  setAttributeCheck() {
    console.log('click');
    let active: string;
    let toggleCheck = document.querySelector("#notificacion");
    toggleCheck.removeAttribute("checked");
    active = this.localDt.get(this.activeCheck);

    if (active == "true") {
      active = "false";
      this.localDt.set(this.activeCheck, active);
      toggleCheck.setAttribute("checked", active);
      return;
    } 

    if (active == "false") {
      active = "true";
      this.localDt.set(this.activeCheck, active);
      toggleCheck.setAttribute("checked", active);
      return;
    } 
  }

  ngOnInit() {
    this.getAttributeCheck();
  }

  cerarrModal() {
    this.modalCtrl.dismiss();
  }

  async toast() {
    const toastEvent = await this.toastCtrl.create({
      message: 'Memoria eliminada Correctamente!',
      duration: 2000,
      animated: true,
      icon: 'alert-circle-outline',
      position: 'top',
    });
    toastEvent.present();
  }

  async loading() {
    this.loadingEvent = await this.laodCtrl.create({
      message: 'Eliminado Memoria Cache',
    });
    return this.loadingEvent.present();
  }

  async alertMessage(mesaggeEvent: string): Promise<void> {
    const toast = await this.toastCtrl.create({
      message: mesaggeEvent,
      duration: 2000,
      position: 'top',
      cssClass: 'toastcss',
    });
    toast.present();
  }


  cache() {
    this.loading();
    sessionStorage.clear();
    setTimeout(() => {
      this.loadingEvent.dismiss();
      this.toast();
    }, 3000);
  }

}
