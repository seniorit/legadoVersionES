import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap16PageRoutingModule } from './cap16-routing.module';

import { Cap16Page } from './cap16.page';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap16PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap16Page]
})
export class Cap16PageModule {}
