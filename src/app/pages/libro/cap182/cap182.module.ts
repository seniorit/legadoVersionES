import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap182PageRoutingModule } from './cap182-routing.module';

import { Cap182Page } from './cap182.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap182PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap182Page]
})
export class Cap182PageModule {}
