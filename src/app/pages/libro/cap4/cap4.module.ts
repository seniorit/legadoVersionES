import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap4PageRoutingModule } from './cap4-routing.module';

import { Cap4Page } from './cap4.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap4PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap4Page]
})
export class Cap4PageModule {}
