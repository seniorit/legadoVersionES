import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap2PageRoutingModule } from './cap2-routing.module';

import { Cap2Page } from './cap2.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap2PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap2Page]
})
export class Cap2PageModule {}
