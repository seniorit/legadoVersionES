import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap42PageRoutingModule } from './cap42-routing.module';

import { Cap42Page } from './cap42.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap42PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap42Page]
})
export class Cap42PageModule {}
