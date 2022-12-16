import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ini4PageRoutingModule } from './ini4-routing.module';

import { Ini4Page } from './ini4.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ini4PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Ini4Page]
})
export class Ini4PageModule {}
