import { Component, OnInit, ViewChild } from '@angular/core';
import { InfiniteScrollCustomEvent, IonInfiniteScroll, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { GetdataService } from 'src/app/services/getdata.service';
import { Capitulos_ } from 'src/app/tools/interface';


@Component({
  selector: 'app-listacap',
  templateUrl: './listacap.component.html',
  styleUrls:['./listacap.component.scss']
})
export class ListacapComponent implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  arrayLista: Observable<Capitulos_[]>;
  capituloArr: any[] = [];
  textoBuscar = '';
  //capitulos = Array(185);
  isIniciarListarCap = false;
  loadingEvent: any;

  constructor(
    private dtLista: GetdataService,
    public toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    this.isIniciarListarCap = true;
    this.setList();
    this.setBuscar();
  }

  limpiarBuscar() {
    this.textoBuscar = '';
    const ionSearch = document.querySelector('ion-searchbar');
    if (ionSearch.value !== '') {
      ionSearch.value = '';
    }
  }

  setList() {
    this.arrayLista = this.dtLista.getCapitulos(this.isIniciarListarCap);
  }

  setBuscar() {
    this.dtLista.getBuscar().subscribe(cap => {
      this.capituloArr = cap;
    });
  }


  async eventBuscar(event: any) {
    this.textoBuscar = await event.target.value;
  }


  onIonInfinite(event: any){
    
    this.capituloArr.length;
  
    setTimeout(() => {
      (event).target.complete();
    }, 1000);


  }


  // loadData(event: any) {
  //   setTimeout(() => {
  //     if (this.capitulos.length > 100) {
  //       event.target.complete();
  //       return;
  //     }
  //     event.target.complete();
  //   }, 1000);
  // }
}
