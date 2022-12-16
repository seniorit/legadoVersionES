import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap44PageRoutingModule } from './cap44-routing.module';

import { Cap44Page } from './cap44.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap44PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Cap44Page]
})
export class Cap44PageModule {}
