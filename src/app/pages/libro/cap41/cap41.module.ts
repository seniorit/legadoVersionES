import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap41PageRoutingModule } from './cap41-routing.module';

import { Cap41Page } from './cap41.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap41PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap41Page]
})
export class Cap41PageModule {}
