import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap1PageRoutingModule } from './cap1-routing.module';

import { Cap1Page } from './cap1.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    Cap1PageRoutingModule
  ],
  declarations: [Cap1Page]
})
export class Cap1PageModule {}
