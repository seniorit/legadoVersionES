import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cap91PageRoutingModule } from './cap91-routing.module';

import { Cap91Page } from './cap91.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cap91PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Cap91Page]
})
export class Cap91PageModule {}
