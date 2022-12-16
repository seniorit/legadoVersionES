import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerc',
  templateUrl: './headerc.component.html',
  styleUrls: ['./headerc.component.scss'],
})
export class HeadercComponent implements OnInit {

  @Input() titleCharter ='EL LEGADO';
  @Input() backRoute: string;

  constructor() { }

  ngOnInit() {}

}
