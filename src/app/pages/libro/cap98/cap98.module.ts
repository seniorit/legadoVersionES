import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap98PageRoutingModule } from './cap98-routing.module';

import { Cap98Page } from './cap98.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap98PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap98Page]
})
export class Cap98PageModule {}
