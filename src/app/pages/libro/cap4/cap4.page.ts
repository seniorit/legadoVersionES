import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-cap4',
  templateUrl: './cap4.page.html',
  styleUrls: ['../capitulos.component.scss','./cap4.page.scss'],
})
export class Cap4Page implements OnInit {
  @ViewChild(IonContent) IonContent:IonContent;

  constructor() { }

  ngOnInit() {
  }

  // scrollToTop() {
  //   this.IonContent.scrollToTop(4000);
  // }

}
