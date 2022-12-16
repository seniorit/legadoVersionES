import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap45PageRoutingModule } from './cap45-routing.module';

import { Cap45Page } from './cap45.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap45PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap45Page]
})
export class Cap45PageModule {}
