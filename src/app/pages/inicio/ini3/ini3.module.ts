import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ini3PageRoutingModule } from './ini3-routing.module';

import { Ini3Page } from './ini3.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ini3PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Ini3Page]
})
export class Ini3PageModule {}
