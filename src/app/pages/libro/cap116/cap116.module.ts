import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap116PageRoutingModule } from './cap116-routing.module';

import { Cap116Page } from './cap116.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap116PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap116Page]
})
export class Cap116PageModule {}
