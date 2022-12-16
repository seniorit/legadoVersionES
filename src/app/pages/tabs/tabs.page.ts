import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetdataService } from 'src/app/services/getdata.service';
import { Tabs_ } from 'src/app/tools/interface';
import { SplashScreen } from '@capacitor/splash-screen';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  arrayTabs: Observable<Tabs_[]>;

  constructor(private dtInicio: GetdataService) { }

  ngOnInit() {
    this.arrayTabs = this.dtInicio.getTabs();
  }

  ionViewDidEnter() {
    SplashScreen.hide();
  }

}
