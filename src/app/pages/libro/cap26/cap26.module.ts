import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap26PageRoutingModule } from './cap26-routing.module';

import { Cap26Page } from './cap26.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap26PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap26Page]
})
export class Cap26PageModule {}
