import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap185PageRoutingModule } from './cap185-routing.module';

import { Cap185Page } from './cap185.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap185PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap185Page]
})
export class Cap185PageModule {}
