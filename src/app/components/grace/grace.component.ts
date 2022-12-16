import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-grace',
  templateUrl: './grace.component.html',
  styleUrls: ['./grace.component.scss'],
})
export class GraceComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  cerarrModal(){
    this.modalCtrl.dismiss();
  }

}
