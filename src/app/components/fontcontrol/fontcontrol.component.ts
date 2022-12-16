import { Component, OnInit } from '@angular/core';
import { FunctionService } from 'src/app/services/function.service';

@Component({
  selector: 'app-fontcontrol',
  templateUrl: './fontcontrol.component.html',
  styleUrls: ['./fontcontrol.component.scss'],
})
export class FontcontrolComponent implements OnInit {

  constructor(private ctrFuente: FunctionService) { }

  ngOnInit() {}

  zoomIn(selector: string){
      this.ctrFuente.zoomIn(selector);
  }

  zoomOut(selector: string){
      this.ctrFuente.zoomOut(selector);
  }

}
